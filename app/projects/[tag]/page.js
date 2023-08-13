import Image from "next/legacy/image";
import Link from 'next/link'
import data from '@/utils/projdata'

export default async function Projects({params}) {
    var projects = await data()
    const ntype = params.tag

    const skillset = []
    var sorted = projects

    if (ntype === "all"){
        sorted = [...projects].sort((a,b) => a.pri - b.pri)
    } else {
        sorted = []
        const det = [...projects].sort((a,b) => a.pri - b.pri)
        for (let i = 0; i < det.length; i++) {
        if(det[i].tags.includes(ntype)){
            sorted.push(det[i])
        }
        }
        shuffle(sorted)
    }

    for(let i = 0; i < projects.length; i++ ) {
        for(let t = 0; t < projects[i].tags.length; t++ ) {
        if(skillset.includes(projects[i].tags[t])){
            continue
        } else {
            skillset.push(projects[i].tags[t])
        }
        }
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;  
        while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    // project
    return (
        <div className='md:p-16 p-5'>
        
        <h1 className="text-sky-600 mb-5 text-2xl text-center md:mt-16 mt-14">Projects</h1>
        <div className='text-slate-300 mb-10 mx-auto text-center'>
            {ntype == "all" ? <Link href={`/projects/all`} className='p-1 mx-2 bg-slate-200 text-black rounded capitalize'>all</Link> : <Link href={`/projects/all`} className='p-1 mx-2 capitalize'>all</Link>}
            {skillset.map(s => {
            return (
                <>
                {ntype == s ? <Link key={s} href={`/projects/${s}`} ><button className='p-1 mx-2 bg-slate-200 text-black rounded capitalize'>{s}</button></Link> : <Link href={`/projects/${s}`}><button className='p-1 mx-2 capitalize'>{s}</button></Link>}
                </>
            )
            })}

        </div>
        <div className='text-sky-200 text-center my-5 text-3xl underline underline-offset-4'>
            {sorted.length} Projects
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

        {sorted.map(pr => {
            return (
                <div key={pr.ranid} className=' md:hover:cursor-pointer md:hover:scale-110 md:hover:z-30 z-10 duration-200'>
                <Link href={`/projects/view/${pr.ranid}`} >
                    <div key={pr._id} data-aos="fade-up" data-aos-delay="100" className="bg-gray-900 hover:text-sky-400 text-white rounded-xl w-full">
                    <Image src={pr.image} alt={pr.title} className="rounded-xl hover:z-30 z-10" height={500} width={1000} priority/>
                    <div className='flex flex-col'>
                        <div className='p-3 pb-4'>
                        <h1 className="font-extrabold text-2xl text-center capitalize font-mono">{pr.title}</h1>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>
            );
            })}
        </div>
        </div>
    );
}