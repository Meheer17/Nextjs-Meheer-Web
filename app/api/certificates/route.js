import { NextResponse } from 'next/server';
import clientPromise from "@/utils/db"
import {getServerSession} from "next-auth/next"
import {authOptions} from '@/pages/api/auth/[...nextauth]'

export const revalidate = 10

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const client = await clientPromise
    const db = client.db().collection('certificates')
    if(id){
        const data = await db.find({ranid: id}).toArray()
        return NextResponse.json({data: data})
    } else {
        const data = await db.find({}).toArray()
        return NextResponse.json({data: data})
    }
}

export async function POST(request) {
    const session = await getServerSession(authOptions)
    if(session){
      if(session.user.admin){
        const client = await clientPromise
        const db = client.db().collection('certificates')
        const proj = await request.json()
        await db.insertOne({title: proj.title, description: proj.description,ranid: proj.ranid, image: proj.image, link: proj.link})
        return NextResponse.json({success: true})
      }
      return NextResponse.json({Error: "Not an Admin"})
    }
    return NextResponse.json({Error: "Not Logged In!! || Not an Admin"})
}

export async function PUT(req) {
    const session = await getServerSession(authOptions)
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if(session){
        if(session.user.admin){
          const client = await clientPromise
          const db = client.db().collection('certificates')
          const proj = await req.json()
          await db.findOneAndUpdate({ranid: id},{$set: {title: proj.title, description: proj.description,ranid: proj.ranid, image: proj.image, link: proj.link}})
          return NextResponse.json({success: true})
        }
        return NextResponse.json({Error: "Not an Admin"})
      }
      return NextResponse.json({Error: "Not Logged In!! || Not an Admin"})
} 