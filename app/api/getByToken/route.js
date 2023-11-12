import next from "@/libs/next"
import useMiddleware from "@/libs/middleware/useMiddleware";
import authenticate from "@/libs/middleware/authenticate";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import httpStatus from "http-status";

const prisma = new PrismaClient()

async function handler(req) {
    const user = await prisma.user.findFirst({
        where: { id: req?.user?.id }, select: {
            id: true,
            email: true,
            username: true,
        }
    })

    if (!user)
        return next({
            statusCode: httpStatus.NOT_FOUND,
            message: "User not found",
        });

    return NextResponse.json({
        success: true,
        data: user,
    }, { status: httpStatus.OK });
}

export const GET = async (req) => useMiddleware(req, authenticate, handler)
