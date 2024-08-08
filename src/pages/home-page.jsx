import React from 'react'
import { HeroSection, MySkills } from '../components/root'

const HomePage = () => {
  return (
    <div className='py-8'>
      <div className=''>
        <HeroSection />
        <MySkills /> 
      </div>
    </div>
  )
}

export default HomePage