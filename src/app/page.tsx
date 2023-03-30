"use client"
import Bio from './sections/bio'
import Experience from './sections/experience'
import ContactMe from './sections/contact_me'
import Education from './sections/education'
import Sidebar from './sections/sidebar'
import Hobbies from './sections/hobbies'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:image" content={"/photos/profile_small.jpg"} />
      </Head>
      <div className='h-full min-h-screen flex flex-row md:flex-col fixed z-[100]'>
        <Sidebar />
      </div>

      <div>
        <div id='bio'>
          <Bio />
        </div>
        <div id='experience'>
          <Experience />
        </div>
        <div id='education'>
          <Education />
        </div>
        <div id='hobbies'>
          <Hobbies />
        </div>
        <div id='projects'>

        </div>
        <div id='contact'>
          <ContactMe />
        </div>
      </div >
    </div>
  )
}
