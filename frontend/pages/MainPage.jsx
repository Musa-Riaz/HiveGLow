import React from 'react'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Heading from '@/components/Heading'
import Footer from '@/components/Footer'

const MainPage = () => {
  return (
    <Layout>
    <div className="min-h-full flex flex-col  ">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 ">
        <Heading />
        <Hero />
      </div>
      <Footer />
    </div>
    </Layout>
  )
}

export default MainPage
