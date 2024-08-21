import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import user from '@/models/user';

export async function POST(req) {
    try {
        await connectMongoDB();
        const {username} = await req.json();
        const User = await user.findOne({username}).select("_id");

        return NextResponse.json({User});
        } catch (error) {
        return NextResponse.json({
            message: "ERROR: " + error.message
        });
    }
}