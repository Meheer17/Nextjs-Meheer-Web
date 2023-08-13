'use client';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/legacy/image";
import { useSession } from "next-auth/react"

export default function NewProject() {
    const [form, setForm] = useState({title:"", description:'',ranid: randomString(6,"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), learnt:"", link:'', github:'', pri:0, tags:[], image: 'Link is here'})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setError] = useState({})
    const router = useRouter()
    const [im, setIm] = useState(false)
    const { data: session, status } = useSession()

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length == 0){
                createProject();
            } else {
                console.log(form)

                setIsSubmitting(false)
            }
        }
    }, [errors])

    function randomString(length, chars) {
        var result = "";
        for (var i = length; i > 0; --i)
          result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    const createProject = async () => {
        console.log(form)
        try {
            const res = await fetch(`https://meheer.vercel.app/api/projects`, {
                method: 'POST',
                headers:{
                    "Accept":"applocation/json",
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(form)
            })
            router.push('/projects')
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        let errs = validate()
        setError(errs);
        setIsSubmitting(true)
    }

    function validate(){
        let err = {}
        return err
    }

    const uploadPhoto = async (e) => {
        const file = e.target.files[0]
    
        const res = await fetch(`/api/projects/s3`)
        const { url } = await res.json()
        
        const upload = await fetch(url, {
          method: 'PUT',
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: file
        })
        if (upload.ok) {
          console.log('Uploaded successfully!')
        } else {
          console.error('Upload failed.')
        }

        const imageUrl = url.split('?')[0]
        setForm({...form, image: imageUrl})
        setIm(true)

    }

    
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        }) 
    }
    
    function handleTags(e){
        var tag = e.target.value.split(",")
        setForm({
            ...form,
            tags: tag
        }) 
    }
    
    const Upload = () =>  {
        return(
            <>
                { im ? <><div className='mb-2'><Image height={500} width={1000} className='mb-2' src={form.image} priority/></div></> : 
                    ( 
                    <>
                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Upload file</label>
                        <input
                            onChange={uploadPhoto}
                            className="block w-full text-sm mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none "
                            type="file"
                            accept="image/png, image/jpeg"
                            /> 
                    </>
                    )
                }
            </>
        )
    }

    if(status === "authenticated" && session.user.admin){
        return(
            <div className='p-10'> 
                <h1 className="text-center text-2xl text-gray-100 font-serif md:mt-16 mt-14">Create A New Project Detail</h1>
                
               {
                isSubmitting ? <div className="mx-auto text-center w-10 h-10 pt-10 "><Loader/></div> : (
    
                    <div className="p-10 drop-shadow-xl ">
                        <form className="mx-auto max-w-5xl text-lg bg-zinc-300 p-5 border-2 border-slate-900 rounded-md" onSubmit={handleSubmit}>
                            {/* <Upload/> */}
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-900 ">Title</label>
                                <input onChange={handleChange} value={form.title} type="text" id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-900 ">Description</label>
                                <textarea onChange={handleChange} value={form.description} rows="10" name='description' type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-900 ">Learnt</label>
                                <input onChange={handleChange} type="text" value={form.learnt} name='learnt' id="learnt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-900 ">Link</label>
                                <input onChange={handleChange} type="text" value={form.link} name='link' id="link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-900 ">Github</label>
                                <input onChange={handleChange} type="text" value={form.github} name='github' id="github" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                            </div>
                          <div className="mb-6">
                                <label className="block mb-2  font-medium text-gray-900 ">Priority Number</label>
                                <input onChange={handleChange} type="number" value={form.pri} name='pri' id="pri" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-medium text-gray-900 ">Tags</label>
                                <input onChange={handleTags} type="text" name='tags' id="tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  /> 
                            </div>
    
                            <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        </form>
                    </div>
                )
               }
            </div>
        )
    } else if(status === "unauthenticated") {
        router.push('/')
    } else {
        return <></>
    }

}

function Loader() {
    return (
        <div role="status">
            <svg aria-hidden="true" className="mr-2 w-10 text-center h-10 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )
}