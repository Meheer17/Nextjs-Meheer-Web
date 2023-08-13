import Link from 'next/link'
import { useState } from 'react'
import { getSession } from 'next-auth/react'
import Image from 'next/image'

export default function Navbar() {
  const [mobile, setMobile] = useState(false)
  const [theme, setTheme] = useState('light')
  const [auth, setAuth] = useState({user: false})

  async function det(){
    try {
      const data = await getSession()
      if(data != null){
        setAuth(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  det()

  function mob() {
    mobile == false ? setMobile(true) : setMobile(false)
  }

  function MenuMob() {
    return (
      <div className='mobile-menu'>
        <ul>
          <li><Link
            href="/"
            onClick={mob}
            className="block text-center text-smr px-2 py-4 transition duration-1000 hover:bg-blue-500"> Home</Link></li>
          <li><Link
            href="/projects/all"
            onClick={mob}
            className="block text-center text-smr px-2 py-4 transition duration-1000 hover:bg-blue-500"> Projects</Link></li>
          <li><Link
            href="/certificates"
            onClick={mob}
            className="block text-center text-smr px-2 py-4 transition duration-1000 hover:bg-blue-500"> Certificates</Link></li>
        </ul>
      </div>
    );
  }

  function dar() {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }



  return <>
    <div className='relative'>


    <nav className="fixed w-full z-50 text-slate-400 p-3 shadow-xl border-b-2 border-gray-700" style={{backgroundImage:"linear-gradient(90deg, rgba(24,24,35,1) 38%, rgba(0,0,0,1) 38%)"}}>
      <div className="cont mx-auto px-4">

        <div className="flex justify-between">
          <div className="items-center flex">
            <span className="text-2xl font-bold italic font-sans">Meheer</span>
          </div>

          <div className="items-center hidden md:flex">
            <Link
              href='/'
              className="py-4 px-2  font-semibold transition duration-300 hover:text-blue-500">Home</Link>
            <Link
              href='/projects/all'
              className="py-4 px-2  font-semibold transition duration-300 hover:text-blue-500">Projects</Link>
            <Link
              href='/certificates'
              className="py-4 px-2 font-semibold transition duration-300 hover:text-blue-500">Certificates</Link>
          </div>

          {
            auth.user ? (
              <div className="items-center gap-4 hidden md:flex">
                <Link href="/api/auth/signout" onClick={() => {setAuth({user: false})}}>Sign out</Link>
                <Image src={auth.user.image} className="rounded-xl z-10" height={40} width={40} priority/> 
              </div>
            ) : <div className='hidden'></div>
          }

          <div className="flex items-center md:hidden">
            <button className="outline-none mobile-menu-button" onClick={mob}>{MaterialSymbolsMenuRounded()}</button>
          </div>  

        </div>

      </div>
      {mobile ? <MenuMob /> : null}
    
    </nav>
    </div>
  </>;
}

function MaterialSymbolsMenuRounded(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"></path></svg>
  )
}

function IcRoundDarkMode(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"></path></svg>
  )
}


function MaterialSymbolsLightMode(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z"></path></svg>
  )
}
