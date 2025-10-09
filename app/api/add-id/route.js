import AddId from "@/app/models/add-id";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        await connectToDatabase();
        const data = await req.json();
        await AddId.create(data);
        return NextResponse.json({message: "IDS Added successfully"}, {status: 200});
    }
    catch(error){
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}

export async function GET(req) {
  try{
    await connectToDatabase();
    const data = await AddId.find();
    return NextResponse.json( data , {status: 200});
  }
  catch(error){
    return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
}