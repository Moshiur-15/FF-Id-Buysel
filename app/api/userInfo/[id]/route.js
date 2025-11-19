
import User from "@/app/models/User";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        await connectToDatabase()
        const { id } = params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return NextResponse.json('User Not Found', { status: 404 });
        }
        return NextResponse.json(deletedUser, { status: 200 });
    }
    catch (error) {
        return NextResponse.json('Internal Server Error', { status: 500 });
    }
}


export async function PATCH(req, { params }) {
    try {
        await connectToDatabase()
        const { id } = params;
        const { role } = await req.json();
        const updatedUser = await User.findByIdAndUpdate(id, { role }, { new: true });
        if (!updatedUser) {
            return NextResponse.json('User Not Found', { status: 404 });
        }
        return NextResponse.json(updatedUser, { status: 200 });
    }
    catch (error) {
        return NextResponse.json('Internal Server Error', { status: 500 });
    }
}