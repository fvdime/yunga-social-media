import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(users);
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Error", { status: 500 });
  }
}