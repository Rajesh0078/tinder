import Features from '@/components/Home/Features'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import Work from '@/components/Home/Work'
import React from 'react'

const page = () => {

  return (
    <main className='bg-[url("/assets/image1.png")] bg-no-repeat bg-cover bg-center h-dvh'>
      <div className='radial'>
        <Header />
        <Hero />
      </div>
      <Features />
      {/* <Work /> */}
      <Footer />
    </main>
  )
}

export default page