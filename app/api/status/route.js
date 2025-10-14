import AddId from "@/app/models/add-id";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try {
        await connectToDatabase();
        const { id, newStatus } = await req.json();
        const updatedData = await AddId.findByIdAndUpdate(id, { status: newStatus }, { new: true });
        if (!updatedData) {
            return NextResponse.json({ error: "Data not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Status Updated Successfully!", updatedData }, { status: 200 });
    }
    catch (err) {
        console.error('PATCH /api/status error:', err);
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
}

export async function POST(req) {
    try{
        await connectToDatabase();
        const body = await req.json();
        const data = await AddId.create(body);
        return NextResponse.json({ message: "Data Created Successfully!", data }, { status: 200 });
    }
    catch(err){
        console.error('POST /api/status error:', err);
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }    
}