import Image from "next/legacy/image";
import Link from 'next/link'
import Contact from '@/components/contactme'

export const metadata = {
  title: 'Portfolio Website: Meheer',
  description: 'Portfolio website: Meheer',
  keywords: {
    default: ['Meheer J', 'Meheer', 'Meher', 'Meher J', 'Meheer Website', 'Meheer portfolio', 'Meher Website'],
    template: [ '%s']
  },
}

export default function Index() {
  return(
    <div className='overflow-x-hidden'>
      <Intro/>
      <AbtMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </ div>
  )
}

function Intro() {
  return (
    <div className='py-40 p-4 grid md:grid-cols-2 grid-cols-1' style={{backgroundImage:"linear-gradient(90deg, rgba(24,24,35,1) 38%, rgba(0,0,0,1) 38%)"}}>
            <div className='boxo'>
                <Image src="/profile.jpg" width="1920" height="1200" className='z-0 grayscale'/>
            </div>
            <div className='md:text-6xl text-5xl font-mono text-slate-100 flex items-center z-10' data-aos="zoom-out-down">
                <div className='font-black'>
                <p>I'm Meheer.</p>
                <p>A Web Developer</p>
                <p className='text-slate-400'>Based In India.</p>
                <p className='text-sm'>If you are looking for a person who loves coding and creating APIs, well that's {String.raw`ME{HEER}`}!</p>
                </div>
            </div>
        </div>
  )
}

function AbtMe() {
  return(
    <>
      <div className="bg-amber-50 grid md:grid-cols-2 grid-cols-1" data-aos="fade-up" data-aos-delay="100">
        <div className='p-12'>
          <div className="inline-block">
            <p className='text-5xl font-black text-black'>Summary</p>
            <p className='text-2xl font-bold mt-3 text-gray-500'>Enthusiastic, dedicated, and reliable computer engineering student with a specialization in backend development, and embodying the principles of hard work, sincerity, dedication, and persistence. Driven by self-teaching and passion for the subject, pushes me forward towards achieving success. I exhibit my keen interest in the realm of Software Engineering.</p>
          </div>
          <div className='mt-12 flex w-full'>
            <div className="mx-auto">
              <Link href={'/aboutme'} className="underline text-2xl font-extrabold md:hover:no-underline underline-offset-8 md:hover:bg-sky-500 p-3 rounded">About Me</Link>
            </div>
            <div className="mx-auto">
              <Link href={'/aboutme/cv'} className="underline text-2xl font-extrabold md:hover:no-underline underline-offset-8 md:hover:bg-sky-500 p-3 rounded">CV</Link>
            </div>
          </div>
        </div>
          <Image src={"/new.jpg"} height={1080} width={1920}/>
      </div>
    </>
  )
}

function Skills() {
  return (
    <div data-aos="fade-up" data-aos-delay="100">

    <div className='grid py-24 md:p-16 p-5 gap-10 md:grid-cols-3 grid-cols-1' style={{backgroundColor: "rgba(0,0,0,1)"}} >
          <div className='text-white text-6xl'>
            Skillset
            <p className='pt-5 text-xl text-slate-400 '>With skills over many methods of creating a website, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
          </div>
          <div className='text-white grid gap-10 grid-rows-2'>
            <div className='md:hover:scale-110 '>
              <div className='text-4xl md:hover:scale-110 transition ease-in-out'>
                <Image src={'/coding.png'} alt={'coding'} height={50} width={50} priority/>
              </div>
              <p className='text-2xl'>Web Developemnt</p>
              <div className='text-slate-500'>
                Working with multiple websites and projects has given me extensive knowledge on how to create websites using the basics I've learnt over the years.
              </div>
            </div>
            <div className='md:hover:scale-110'>
              <div className='text-4xl md:hover:scale-110 transition ease-in-out'>
                <Image src={'/backend.png'} alt={'backend'} height={50} width={50} priority/>
              </div>
              <p className='text-2xl'>BackEnd Developemnt</p>
              <div className='text-slate-500'>
                A really good idea and a clear understanding of how to create a smooth flawless code running with the lowest latency possible, what more would you want?
              </div>
            </div>
            
          </div>
          <div className='text-white grid gap-10 grid-rows-2'>
            <div className='md:hover:scale-110'>
              <div className='text-4xl transition ease-in-out md:hover:scale-110'>
                <Image src={'/api.png'} alt={'api'} height={50} width={50} priority/>
              </div>
              <p className='text-2xl'>Api Development</p>
              <div className='text-slate-500'>
                Having fun while developing or creating APIs is the only way to succeed in it. Most importantly, be confident to face the challenges thrown at you... Which I believe I'm good at!
              </div>
            </div>
            <div className='md:hover:scale-110'>
              <div className='text-4xl transition ease-in-out md:hover:scale-110'>
                <Image src={'/self-learning.png'} alt={'self-learning'} height={50} width={50} priority/>
              </div>
              <p className='text-2xl'>Self Learning</p>
              <div className='text-slate-500'>
                For the level of knowledge I've acquired over these few years, self learning was the only way. Determination to learn, and the curiosity to try new things brought me to where I stand. 
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}


async function ProgressBar() {
  const res = await fetch(`https://meheer.vercel.app/api/projects`,{ next: { revalidate: 10 } });
  const post = await res.json();
  const projects = post.data 
  const count = {}
  const skillset = []
  const skillRatio = {}
  
  for(let i = 0; i < projects.length; i++ ) {
    for(let t = 0; t < projects[i].tags.length; t++ ) {
      if(skillset.includes(projects[i].tags[t])){
        skillRatio[projects[i].tags[t]] += 1
      } else {
        skillset.push(projects[i].tags[t])
        skillRatio[projects[i].tags[t]] = 1
      }
    }
  }
  
  for(let i = 0; i < skillset.length; i++) {
    count[skillset[i]] = (skillRatio[skillset[i]] / projects.length) * 100 
  }

  return (
    <>
      <div className='md:p-24 px-12 pb-10 font-mono' data-aos="fade-up" data-aos-delay="100">
        <h1 className='text-6xl text-white my-5'>Projects Skill Ratio</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 grid-cols-1'>
            {skillset.map(s => {
              return (
                <>
                  <Link href={`/projects/${s}`} id={s}>

                    <div className="mb-1 text-xl text-slate-400 font-bold capitalize">{s +" - "+ Math.floor(count[s]) + "%"}</div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                      <div className="bg-orange-500 h-4 rounded-full" style={{width: `${count[s]}%`}}></div>
                    </div>

                  </Link>
                </>
              )
            })}
        </div>
      </div>
    </>
  )

}

async function Projects() {
  const res = await fetch(`https://meheer.vercel.app/api/projects?limit=2`,{ next: { revalidate: 10 } });
  const post = await res.json();
  const projects = post.data 
  
  return <>
    <div className='grid md:grid-cols-2 gap-5 grid-cols-1 md:p-16 p-5' data-aos="fade-up" data-aos-delay="100">
      <div className='grid grid-rows-1'>
        
        <div>
          <h1 className='text-slate-500'>MY PROJECTS</h1>
          <h1 className='text-6xl text-white mb-4'>Work I've done over the past 2 years!</h1>
        </div>

        <div className=' duration-300 mt-3 text-white md:hover:scale-110 md:hover:z-30 md:hover:text-blue-400'>
          <Link href={`/projects/view/${projects[0].ranid}`} >
          <div key={projects[0]._id} className="bg-gray-900  duration-300 rounded-xl w-full">
            <Image src={projects[0].image}  alt={projects[0].title} className="rounded-xl z-10" height={500} width={1000} priority/>
            <div className='p-3'>
              <h1 className="font-extrabold text-2xl text-center">{projects[0].title}</h1>
            </div>
          </div>
          </Link>
        </div>
      </div>
      
      <div className='grid grid-cols-1'>
        <div className=' mt-3 duration-300 text-white md:hover:scale-110 md:hover:z-30 md:hover:text-blue-400'>
          <Link href={`/projects/view/${projects[1].ranid}`} >
          <div key={projects[1]._id} className="bg-gray-900 rounded-xl w-full">
            <Image src={projects[1].image} alt={projects[1].title} className="rounded-xl z-10" height={500} width={1000} priority/>
            <div className='p-3'>
              <h1 className="font-extrabold text-2xl text-center">{projects[1].title}</h1>
            </div>
          </div>
          </Link>
        </div>

          <div className='flex justify-center mt-10'>
            <h1 className='text-white'><Link href={'/projects/all'} className='md:text-2xl text-sm text-white p-3 border-2 duration-500  border-sky-300 md:hover:bg-sky-400 md:hover:text-gray-900 rounded'>VIEW ALL PROJECTS</Link></h1>
          </div>

        </div>

    </div>
    <ProgressBar/>

  </>;
}