// import bcrypt from 'bcrypt'
// import { PrismaClient } from '@prisma/client'

// import prisma from '@/libs/prismadb'
// import serverAuth from '@/libs/serverAuth'

// // const prisma = new PrismaClient()

// export async function GET(req, res) {
//   try {
//     const { currentUser } = await serverAuth(req)

//     return res.status(200).json(currentUser)
//   } catch (error) {
//     console.log(error)
//     return res.status(400)
//   }
// }