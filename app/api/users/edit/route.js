import getCurrentUser from "@/actions/getCurrentUser";
import getToken from "@/libs/getToken";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  try {
  const currentUser = await getCurrentUser(getToken())
    console.log(currentUser)

    const { name, username, bio, profileImage } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
       id: currentUser.id
      },
      data: {
        name,
        username, 
        bio,
        profileImage 
      }
    })
    
    return new NextResponse(JSON.stringify(updatedUser), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}

