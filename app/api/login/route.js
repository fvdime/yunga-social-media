import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { generateAccessToken, generateRefreshToken } from '@/libs/generateToken'

const prisma = new PrismaClient()

//EXPIRATION DATE FOR TOKENS
const MAX_AGE = 30 * 24 * 60 * 60 * 1000

export async function POST(req) {
  try {
    const body = await req.json()
    const {email, password } = body

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user) {
      return null
    }

    //PASSWORD CHECKING W/ BCRYPT
    const passwordsMatch = await bcrypt.compare(password, user?.hashedPassword)

    if (passwordsMatch) {
      user.hashedPassword = ""

      //GENERATING ACCESS N REFRESH TOKENS
      const accessToken = generateAccessToken({
        user: {
          id: user.id,
          username: user.username,
        }
      })

      const refreshToken = generateRefreshToken({
        user: {
          id: user.id,
          username: user.username,
        }
      })

      const response = NextResponse.json({
        data: user,
        token: { accessToken, refreshToken },
        message: "logged in"
      }, { status: 200 })

      response.cookies.set({
        name: 'accessToken',
        value: accessToken,
        path: '/',
        expires: Date.now() + MAX_AGE
      })

      response.cookies.set({
        name: 'refreshToken',
        value: refreshToken,
        path: '/',
        expires: Date.now() + MAX_AGE
      })

      return response
    } else {
      return new NextResponse(JSON.stringify({ message: "Password not match" }), { status: 409 })
    }
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}