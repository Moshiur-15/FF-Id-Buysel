import AddId from "../../../models/add-id";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectToDatabase();

    const { id } = await params;
    const newId = await req.json();
    console.log("new id = ", newId);

    const updated = await AddId.findByIdAndUpdate(id, newId, { new: true });
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