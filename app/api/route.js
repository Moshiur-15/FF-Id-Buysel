import { NextResponse } from "next/server";
import connectToDatabase from "../utils/database";

export async function GET(req) {
    try {
        await connectToDatabase();
        return NextResponse.json({ message: "Database connected successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}