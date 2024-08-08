import React from 'react'
import { HeroSection, MySkills, MyTechnologies } from '../components/root'

const HomePage = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <HeroSection />
        <MyTechnologies />
        <MySkills /> 
      </div>
    </div>
  )
}

export default HomePage