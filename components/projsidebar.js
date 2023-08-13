import Link from 'next/link'

export const revalidate = 10;

export default async function Sidebar(){
    const res = await fetch(`https://meheer.vercel.app/api/projects`,{ next: { revalidate: 10 } });
    const post = await res.json();
    var sorted = post.data 
    const project = [...sorted].sort((a,b) => a.pri - b.pri)

    return(
        <>
            {project.map(s => {
                return(
                    <Link href={`/projects/view/${s.ranid}`} key={s.ranid}><div className='text-white hover:bg-blue-500 hover:border-blue-800 my-3 rounded-xl p-2 border-2 border-gray-700 text-xl'>{s.title}</div></Link>
                )
            })}
        </>
    )
}