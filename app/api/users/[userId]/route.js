import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req, res){
  try {
    const {userId} = req.query

    if (!userId || userId !== 'string') {
      return new NextResponse("Invalid user ID", { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    const followersCount = await prisma.user.count({
      where: {
        followingIds:{ has: userId }
      }
    })

    return NextResponse.json({...existingUser, followersCount}, {status: 200})
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}