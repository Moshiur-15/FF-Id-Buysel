
import User from "@/app/models/User";
import connectToDatabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET (req){
    try{
        await connectToDatabase()
        const userInfo = await User.find({});
        return NextResponse.json(userInfo, {status: 200});
    }
    catch(error){
        return NextResponse.json('Internal Server Error', {status: 500});
    }
}