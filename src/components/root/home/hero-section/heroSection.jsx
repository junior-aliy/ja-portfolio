import React from 'react'
import { ButtonCommon } from '../../../common'
import { BiDownArrow } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'

const toDownHandler = () => {
  window.scrollTo({
    top: 620,
    left: 0,
    behavior: 'smooth'
  })
}

const HeroSection = () => {
  return (
    <div className=' container py-24'>
        <div className='w-[95%] mx-auto flex items-center gap-6 '>
          <div className="flex-1">
            <h1 className='text-6xl font-medium '> <span className='text-green-600'>asSalamu alaykum</span> va rahmatullah.</h1>
            <h2 className='text-8xl inline-block tracking-wide text-white drop-shadow-xl font-bold font-[monospace] my-4 relative after:absolute after:top-0 after:left-0 after:w-full after:h-[95%] after:content-[""] after:bg-green-600 after:-z-10 after:skew-y-1 after:skew-x-6'>Junior Aliy</h2>
            <p className='text-gray-400 text-xl font-medium'>Frontend <span className='bg-green-600 px-1 rounded-sm text-white font-[monospace]'>JavaScript</span> junior dasturchi.</p>
            {/* <ButtonCommon label={'men haqimda'} classHandler='bg-green-600 text-white mt-4 rounded-sm' link={'about-me'}/> */}
            <ButtonCommon label={'resume yuklash'} icon={<FiDownload />} classHandler='text-green-600 mt-4 rounded-sm mx-2 border border-green-600' link={'about-me/get-cv'}/>
          </div>
          <div className='flex-1 border'>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSIQXYT8d96Tu9guAdZqUBaSfuJJdf2Zyqw&s" alt=""  className='w-[250px]  mx-auto' /> */}
          </div>
        </div>
    </div>
  )
}

export default HeroSection