import getCurrentUser from '@/actions/getCurrentUser'
import getToken from '@/libs/getToken'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const token = getToken()
    console.log(token)
    const currentUser = await getCurrentUser(token)
    console.log(currentUser)

    const postBody = await req.json()
    const { body, image } = postBody
  
    if (!body) {
      return new NextResponse("Missing Fields!", {status: 400})
    }
  
    const post = await prisma.post.create({
      data: {
        body, image, userId: currentUser.id
      }
    })
  
    return NextResponse.json(post)
    
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}

// export async function GET(req, {params}) {
//   try {
//     const  {userId} = params
    
//     if (userId) {
//       const posts = await prisma.post.findMany({
//         where: {
//           userId
//         },
//         include: {
//           user: true,
//           comments: true
//         },
//         orderBy: {
//           createdAt: 'desc'
//         }
//       })
//     } else {
//       const posts = await prisma.post.findMany({
//         include: {
//           user: true,
//           comments: true
//         },
//         orderBy: {
//           createdAt: 'desc'
//         }
//       })
//     }
//     return NextResponse.json(posts)
    
//   } catch (error) {
//     return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
//   }

// }