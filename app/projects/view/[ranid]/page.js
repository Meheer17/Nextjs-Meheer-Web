import Link from 'next/link'
import Image from "next/legacy/image";
import { Editbutton } from './editbutton';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/projsidebar';

export const metadata = {
    title: 'Project details',
    description: 'Project details.',
  }

export default async function ViewProject({params}){
    
    const { ranid } = params
    const res = await fetch(`https://meheer.vercel.app/api/projects?id=${ranid}`,{ next: { revalidate: 10 } });
    const post = await res.json();
    const project = post.data 
    var details = project[0]
    const router = useRouter

    let text = ''
    for(let i=0; i < details.tags.length; i++){
        text += details.tags[i] + ', ' 
    }
    text = text.slice(0, -2)
    if(details){
        return (
            <div className='flex flex-row'>
                <div className='md:basis-1/5 hidden md:block rounded-xl pt-32 p-4 overflow-y-auto h-screen' style={{backgroundColor:"rgba(24,24,35,1)"}}>
                    <Sidebar/>
                </div>
                <div className='md:basis-4/5 h-screen overflow-y-auto'>
                    <section className='py-32 mx-auto max-w-3xl p-4'>
                        <div className='text-center text-white text-5xl mb-10'>{details.title}</div>
                        <div>
                        <Image src={details.image} className="rounded-md" height={1080} width={1920} priority/>
                        </div>
                        <div className='text-white mt-10 text-3xl underline underline-offset-4'>Project Description -</div>
                        <div className='text-gray-400 mt-10 text-2xl'>{details.description}</div>
                        <div className='text-white mt-12 text-3xl underline underline-offset-4'>What Have I Learnt From This Project -</div>
                        <div className='text-gray-400 mt-10 text-2xl'>{details.learnt}</div>
                        <div className='text-white mt-10 text-3xl underline underline-offset-4'>Tags -</div>
                        <div className='text-gray-400 mt-4 text-2xl capitalize'>{text}</div>
                        <div className='pt-20 justify-between flex'>
                            {details.link ? <Link href={details.link} target={"_blank"}
                            className="bg-black hover:cursor-pointer duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full  text-center"
                                >View</Link> : null}
                            {details.github ? <Link href={details.github} target={"_blank"}
                            className="bg-black hover:cursor-pointer duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full  text-center"
                                >Github</Link> : null}
                            <Editbutton details={details}/>
                        </div>
                    </section>
                    
                </div>
            </div>
        )
    } else {
        router.push('/')
    }
}