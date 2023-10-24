import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req) {
  const body = await req.json()
  const {name, username, email, password} = body

  if (!username || !email || !password) {
    return new NextResponse("Missing Credentials!", {status: 400})
  }

  const existUser = await prisma.user.findUnique({
    where: { email: email }
  })

  if(existUser){
    return new NextResponse("User already exists!", {status: 400})
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      name, username, email, hashedPassword
    }
  })

  return NextResponse.json(user)
}