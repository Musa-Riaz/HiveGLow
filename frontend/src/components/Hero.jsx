import React from 'react'
import Heading from './Heading'
import { Scroll } from 'lucide-react'
const Hero = () => {
  return (
    <div className='flex flex-col  h-full items-center justify-center max-w-5xl pt-20'>
      <div className='flex items-center   '>
          <Heading />
      </div>
    </div>
  )
}

export default Hero
