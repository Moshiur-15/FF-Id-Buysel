import AddId from "@/app/models/add-id";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        // Check if MongoDB URI exists
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI environment variable is not set');
            return NextResponse.json({error: "Database configuration error"}, {status: 500});
        }

        await connectToDatabase();
        const data = await req.json();
        
        // Validate required fields
        if (!data.name || !data.uid) {
            return NextResponse.json({error: "Name and UID are required"}, {status: 400});
        }
        
        const newId = await AddId.create(data);
        return NextResponse.json({message: "IDS Added successfully", id: newId._id}, {status: 200});
    }
    catch(error){
        console.error('POST /api/add-id error:', error);
        return NextResponse.json({error: "Internal Server Error", details: error.message}, {status: 500});
    }
}

export async function GET(req) {
  try{
    await connectToDatabase();
    const data = await AddId.find();
    return NextResponse.json( data , {status: 200});
  }
  catch(error){
    console.error('GET /api/add-id error:', error);
    return NextResponse.json({error: "Internal Server Error", details: error.message}, {status: 500});
  }
}