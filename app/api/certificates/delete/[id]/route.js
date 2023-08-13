import { NextResponse } from 'next/server';
import clientPromise from "@/utils/db"
import {getServerSession} from "next-auth/next"
import {authOptions} from '@/pages/api/auth/[...nextauth]'
import { ObjectId } from 'mongodb';

export async function GET(request, {params}) {
    const session = await getServerSession(authOptions)
    const id = params.id
    if(session){
        if(session.user.admin){
            const client = await clientPromise
            const db = client.db().collection('certificates')
            await db.deleteOne({_id: new ObjectId(id)})
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.json({Error: "Not an Admin"})
    }
    return NextResponse.json({Error: "Not Logged In!! || Not an Admin"})
  }