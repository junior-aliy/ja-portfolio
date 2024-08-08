import React from 'react'
import { HeroSection } from '../components/root'

const HomePage = () => {
  return (
    <div className=''>
      <div className='bg-[url("/hero__image.avif")] bg-cover  bg-no-repeat bg-origin-content bg-center blur-10 '>
        <HeroSection />
      </div>
    </div>
  )
}

export default HomePage