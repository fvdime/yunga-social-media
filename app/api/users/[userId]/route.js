import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

// export async function GET(req){
//   try {
//     const {userId} = req.query

//     if (!userId || userId !== 'string') {
//       return new NextResponse("Invalid user ID", { status: 400 });
//     }

//     const existingUser = await prisma.user.findUnique({
//       where: {
//         id: userId
//       }
//     })

//     const followersCount = await prisma.user.count({
//       where: {
//         followingIds:{ has: userId }
//       }
//     })

//     return NextResponse.json({...existingUser, followersCount}, {status: 200})
//   } catch (error) {
//     console.log(error)
//     return new NextResponse("Internal Error", { status: 500 })
//   }
//   // const  {userId} = params
  
//   // try {
//   //   const singleUser = await prisma.product.findUnique({
//   //     where: {
//   //      id: userId
//   //     }
//   //   })
//   //   return new NextResponse(JSON.stringify(singleUser), { status: 200 })
//   // } catch (error) {
//   //   console.log(error)
//   //   return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
//   // }
// }

export const GET = async (req, {params}) => {
  const  {userId} = params
  
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
       id: userId
      }
    })
    return new NextResponse(JSON.stringify(existingUser), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}