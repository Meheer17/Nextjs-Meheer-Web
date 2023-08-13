import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="p-4 border-slate-500 border-t-2 mb-0 w-full shadow-xl md:px-6 md:py-8" style={{backgroundImage:"linear-gradient(90deg, rgba(24,24,35,1) 62%, rgba(0,0,0,1) 38%)"}}>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-slate-400 items-center flex">
          <span className="text-2xl font-bold italic font-sans">Meheer</span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-slate-400 sm:mb-0">
          <li><Link href="/" className="mr-4 md:hover:underline md:mr-6">Home</Link></li>
          <li><Link href="/projects/all" className="mr-4 md:hover:underline md:mr-6">Project</Link></li>
          <li><Link href="/certificates" className="mr-4 md:hover:underline md:mr-6">Certificates</Link></li>
          <li><Link
            href="/aboutme"
            className="mr-4 underline decoration-sky-500 decoration-4 md:hover:underline md:mr-6">About Me</Link></li>
        </ul>
      </div>
      <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/" className="md:hover:underline"></Link> Created By Meheer.</div>
      <div className="block text-sm text-transparent sm:text-center dark:text-transparent" >
        <Link target="_blank" href="https://icons8.com/icon/64230/promotion-window">Promotion Window</Link> icon by <Link target="_blank" href="https://icons8.com">Icons8</Link>
      </div>
    </footer>
  );
}