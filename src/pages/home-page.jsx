import React from 'react'
import { AboutMe, HeroSection, MySkills, MyTechnologies } from '../components/root'

const HomePage = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <HeroSection />
        <MyTechnologies />
        <AboutMe />
        <MySkills /> 
      </div>
    </div>
  )
}

export default HomePage