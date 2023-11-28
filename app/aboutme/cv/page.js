import Contact from '@/components/contactme'
import Link from 'next/link'

export const metadata = {
    title: 'Meheer Resume',
    description: 'Meheer Resume',
}

export default async function AboutMe() {
    const res = await fetch(`https://meheer.vercel.app/api/certificates`,{ next: { revalidate: 10 } });
    const post = await res.json();
    const projects = post.data 
    return (
        <>
            <div className='py-24 min-h-screen'>
                <div className='bg-white mt-5 max-w-5xl rounded-lg p-5 mx-auto w-full'>
                    <div className='text-center text-5xl font-extrabold'>Meheer J</div>
                    <div className='text-center text-xl font-medium'>Bangalore  560076</div>
                    <div className='text-center text-xl font-medium'>
                        <Link target='_blank' className='underline text-blue-700' href={'https://meheer.vercel.app'}>https://meheer.vercel.app</Link> | meherr17.j@gmail.com | +91 8310697451
                    </div>

                    <div className='text-lg mt-3'>
                        <div className='font-bold text-xl mb-2 underline'>Summary</div>
                        <div className='indent-7'>
                            Enthusiastic, dedicated, and reliable computer engineering student with a specialization in backend 
                            development, and embodying the principles of hard work, sincerity, dedication, and persistence. 
                            Driven by self-teaching and passion, I exhibit my keen interest in the realm of Software Engineering.
                        </div>

                        <div className='font-bold text-xl mt-7 mb-2 underline'>Education</div>
                        <div className='indent-3'>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Saveetha University, Chennai</span>
                                <span className='font-semibold'>Anticipated Aug 2027</span>
                            </div>
                            <div>Computer Science Engineering (B.E)</div>
                            <div>Specialization in Artificial Intelligence</div>
                        </div>

                        <div className='font-bold text-xl mt-7 mb-2 underline'>Skills</div>
                        <div className='indent-3'>
                        Python, C, C++, JavaScript, Tailwindcss, Vercel, MongoDB, Amazon S3 Buckets, SQL, NoSQL, Node.js, React, Next.Js
                        </div>

                        <div className='font-bold text-xl mt-7 mb-2 underline'>Relavant Projects</div>
                        <ol className='list-decimal px-10'>
                            <li>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>Computational Fundamentals</span>
                                    <span className='font-semibold'>C, JavaScript</span>
                                </div>
                                <ul class="list-disc list-inside">
                                    <li>Implemented fundamental aspects of computer science, specializing in the organization of data (data structures) and the development of effective computational solutions (algorithms).</li>    
                                    <li>hands-on experience with essential data structures such as Trees, BST, Trie, Hash Tables, etc.</li>
                                    <li>Applied algorithmic solutions to computational challenges, showcasing a deep understanding of algorithm design and implementation in both C and JavaScript.</li>
                                </ul>
                            </li>

                            <li>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>Portfolio Website</span>
                                    <span className='font-semibold'>JavaScript, Next.js, React.js</span>
                                </div>
                                <ul class="list-disc list-inside">
                                    <li>Created a repository portfolio website showcasing my skillset and progression as a web developer.</li>    
                                    <li>Features a collection of certificates and experiences that I have gained in my journey and the methodologies I used to Implement them to create my projects.</li>
                                    <li>Developed my portfolio website using Next.js.</li>
                                </ul>
                            </li>

                            <li>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>python list in C</span>
                                    <span className='font-semibold'>C, Python</span>
                                </div>
                                <ul class="list-disc list-inside">
                                    <li>Developed a custom implementation of list features, including append and pop operations, in C to emulate the functionality of Python lists.</li>    
                                    <li>Demonstrated a proactive and creative mindset by recreating Python list features in C.</li>
                                    <li>Implemented this project as a practical test of C programming knowledge, showcasing the ability to apply newly acquired skills in a real-world context.</li>
                                </ul>
                            </li>
                        </ol>

                        <div className='font-bold text-xl mt-7 mb-2 underline'>Work Experience</div>
                        <ol className='list-decimal px-10'>
                            <li>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>Project Developer, Global Affairs Desk, India</span>
                                    <span className='font-semibold'>Summer 2023</span>
                                </div>
                                <ul class="list-disc list-inside">
                                    <li>Led end-to-end development of a dynamic Blog Website tasked with transforming the client's version into reality. This project aimed to give authorized writers post blogs on various issues through an unbiased lens.</li>    
                                    <li>Designed the entire website on Next.js Framework and the back end using Serverless Node.js runtime as data streaming would be easy throughout the website.</li>
                                    <li>Applied the Node.js framework and used the Next-Auth with Google Oauth2 for Authentication of Users to comment on Blogs and let the writers to post and edit Blogs.</li>
                                    <li>Implemented the framework using MongoDB and Amazon S3 Buckets for storing the data and images.</li>    
                                    <li>Finally, tested the API endpoints by creating, deleting, and Editing Blogs.</li>
                                </ul>
                            </li>
                        </ol>

                        <div className='font-bold text-xl mt-7 mb-2 underline'>Leadership</div>
                        <ol className='list-decimal px-10'>
                            <li>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>Event Manager, PSBBLLA, Bangalore</span>
                                    <span className='font-semibold'>2023</span>
                                </div>
                                <ul class="list-disc list-inside">
                                    <li>Took charge of handling and scheduling events, ensuring punctual execution of events.</li>    
                                    <li>Proactively addressed logistical challenges and facilitated solutions to ensure a cohesive and streamlined event experience for all participants.</li>
                                    <li>Managed the timely assembly and coordination of students in the basement for a timely transition to the stage.</li>
                                </ul>
                                </li>
                        </ol>

                        <div className='font-bold text-xl mt-7 mb-2 underline'>Certificates</div>
                        <ul className='list-disc list-inside px-5'>
                            {
                                projects.map((pr) => {
                                    return(
                                        <li><Link href={`/certificates/view/${pr.ranid}`}>{pr.title}</Link></li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <Contact/>
        </>
    )
}