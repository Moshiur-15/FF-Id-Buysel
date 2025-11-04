import AddId from "@/app/models/add-id";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDatabase();
    const data = await AddId.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET /api/add-id error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}