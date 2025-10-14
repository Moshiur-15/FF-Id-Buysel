import User from "@/app/models/User";
import connectToDatabase from "@/app/utils/database"
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        await connectToDatabase();
        const { name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 15);
        const postData = await User.create({
            name,
            email,
            password: hashedPassword
        })
        return NextResponse.json(
            { message: "User created successfully", data: postData },
            { status: 200 }
        )
    }
    catch (err) {
        console.log(err)
        return NextResponse.json(
            { message: "Invalid User", error: err.message },
            { status: 500 }
        );
    }
}