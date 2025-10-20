import AddId from "../../../models/add-id";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectToDatabase();

    const { id } = await params;
    const data = await req.json();

    const updated = await AddId.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Updated successfully", data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const deletedId = await AddId.findByIdAndDelete(id);
    if (!deletedId) {
      return NextResponse.json("Id not found", { status: 404 });
    }
    return NextResponse.json({ message: "Id deleted successfully", deleteData: deletedId }, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to delete Id", { status: 500 });
  }
}

export async function GET(req, {params}) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const data = await AddId.findOne({_id: id});
    if (!data) {
      return NextResponse.json("Id not found", { status: 404 });
    }
    return NextResponse.json({ message: "Get Id successfully", data }, { status: 200 });
  }
  catch (err) {
    return NextResponse.json("Failed to Get Id", { status: 500 });
  }
}