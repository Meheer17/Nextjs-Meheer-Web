import aws from 'aws-sdk'
import { NextResponse } from 'next/server';
const region = "ap-south-1"
const bucketName = "website-bucket-meheer"
const accessKeyId = process.env.B_A_KEY
const secretAccessKey = process.env.B_S_KEY
export const revalidate = 2
import {getServerSession} from "next-auth/next"
import {authOptions} from '@/pages/api/auth/[...nextauth]'

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey
})  

export async function GET(request){
  const session = await getServerSession(authOptions)
    if(session){
        if(session.user.admin){
          const rawBytes = new Date()
          const imageName = rawBytes.valueOf()
          
          const params = ({
            Bucket: bucketName,
            Key: "Image:Meheer-New-Web-NJS-13 " + imageName,
            Expires: 60
          })
          const uploadURL = await s3.getSignedUrlPromise('putObject', params)
          return NextResponse.json({url: uploadURL})
        }
        return NextResponse.json({Error: "Not an Admin"})
    }
    return NextResponse.json({Error: "Not Logged In!! || Not an Admin"})
}