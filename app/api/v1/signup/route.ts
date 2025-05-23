import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient()

export async function POST(req: NextRequest) {
        const data = await req.json()
        console.log(data);

     await   client.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        })
        

        return NextResponse.json({
            data,
            message: "You are signed in"
        })
        
}