import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import user from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

        await connectMongoDB();
        await user.create({ username, email, password: hashedPassword });

        return NextResponse.json({
            message: "User registered."
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            message: "ERROR: " + error.message
        }, { status: 500 });
    }
}