import React from 'react'
import Heading from './Heading'

const Hero = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-64px)] items-center justify-center max-w-5xl'>
      <div className='flex items-center   '>
        <Heading />
      </div>
    </div>
  )
}

export default Hero
