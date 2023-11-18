import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
  const  {postId} = params
  
  try {
    const singlePost = await prisma.post.findUnique({
      where: {
       id: postId
      }
    })

    return new NextResponse(JSON.stringify(singlePost), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}

// access key 
// secret key 
// REGION 