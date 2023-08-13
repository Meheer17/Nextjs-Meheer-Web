"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link'

export function Editbutton({details}) {
    const { data: session, status } = useSession()
    var name = (status === "authenticated" && session.user.admin)
    return(
        <>
            {name ? <Link href={`/projects/edit-project/${details.ranid}`}>
                <div className='bg-black hover:cursor-pointer duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full text-center'>
                    Edit</div></Link> : null}
        </>
    )
}   