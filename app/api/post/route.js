import getCurrentUser from '@/actions/getCurrentUser'
import getToken from '@/libs/getToken'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const awsS3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  }
})

async function uploadFilesToS3(image, imageName){
  const imageBuffer = image
  console.log(imageName)

  const imageContentArray = imageName.split('.');

  const fileContent = imageContentArray[imageContentArray.length - 1];

  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: `${imageName}-${Date.now()}`,
    Body: imageBuffer,
    ContentType: `image/${fileContent}`
  }

  const command = new PutObjectCommand(params)
  await awsS3Client.send(command)
  return imageName
}

export async function POST(req) {
  try {
    const token = getToken()
    const currentUser = await getCurrentUser(token)

    const formData = await req.formData()
    const image = formData.get("image")
    const body = String(formData.get("body"))
  
    if ( !image || !body ) {
      return new NextResponse("Missing Fields!", {status: 400})
    }

    const buffer = Buffer.from(await image.arrayBuffer())
    const imageName = await uploadFilesToS3(buffer, image.name)
  
    const post = await prisma.post.create({
      data: {
        body: body,
        image: imageName,
        userId: currentUser.id
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