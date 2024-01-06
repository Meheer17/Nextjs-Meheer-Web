"use client";
import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { SessionProvider } from "next-auth/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <html lang="en">
      <meta name="google-site-verification" content="CKoJ1VHu8UnDlXxQ4ULZhz-1kPirZ-wQFBg-QpfDp9Q" />
      <body className="bg-black overflow-x-hidden">
        <Navbar/>
        <div className='min-h-screen '>
          <SessionProvider>
            {children}
          </SessionProvider>
        </div>
        <Footer/>
      </body>
    </html>
  )
}