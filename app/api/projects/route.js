import { NextResponse } from 'next/server';
import clientPromise from "@/utils/db"
import {getServerSession} from "next-auth/next"
import {authOptions} from '@/pages/api/auth/[...nextauth]'

export const revalidate = 10

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const limit = searchParams.get('limit')
    const client = await clientPromise
    const db = client.db().collection('projects')
    if(id){
        const data = await db.find({ranid: id}).toArray()
        return NextResponse.json({data: data})
    } else if (limit) {
        const data = await db.find({}).sort({pri: 1}).limit(parseInt(limit)).toArray()
        return NextResponse.json({data: data})
    }else {
        const data = await db.find({}).toArray()
        return NextResponse.json({data: data})
    }
}

export async function POST(request) {
    const session = await getServerSession(authOptions)
    if(session){
      if(session.user.admin){
        const client = await clientPromise
        const db = client.db().collection('projects')
        const proj = await request.json()
        await db.insertOne({title: proj.title, ranid: proj.ranid, description: proj.description, learnt: proj.learnt,image: proj.image, link: proj.link, github: proj.github, pri: parseInt(proj.pri), tags: proj.tags})
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
          const db = client.db().collection('projects')
          const proj = await req.json()
          console.log(proj)
          await db.findOneAndUpdate({ranid: id},{$set : {title: proj.title, ranid: proj.ranid, description: proj.description, learnt: proj.learnt,image: proj.image, link: proj.link, github: proj.github, pri: proj.pri, tags: proj.tags}})
          return NextResponse.json({success: true})
        }
        return NextResponse.json({Error: "Not an Admin"})
      }
      return NextResponse.json({Error: "Not Logged In!! || Not an Admin"})
}