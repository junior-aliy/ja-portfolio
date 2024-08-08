import React from 'react'
import { ButtonCommon } from '../../../common'
import { BiDownArrow } from 'react-icons/bi'

const toDownHandler = () => {
  window.scrollTo({
    top: 620,
    left: 0,
    behavior: 'smooth'
  })
}

const HeroSection = () => {
  return (
    <div className='w-[80%] flex items-center gap-6 py-16 mx-auto'>
        <div className="flex-1 with-48">
          <h1 className='text-5xl font-medium '> <span className='text-green-600'>asSalamu alaykum</span> va rahmatullah.</h1>
          <h2 className='text-7xl tracking-wide text-white drop-shadow-xl font-bold font-[monospace] my-6 relative after:absolute after:top-0 after:left-0 after:w-full after:h-[95%] after:content-[""] after:bg-green-600 after:-z-10 after:skew-y-1 after:skew-x-6'>Junior Aliy</h2>
          <p className='text-gray-400 text-lg font-medium indent-8'>Men Junior Aliy. Hozirda men <span className='bg-green-600 px-1 rounded-sm text-white font-[monospace]'>junior</span> frontend dastruchiman. Ushbu saytda siz mening qilgan ishlarimni, o'rgangan va o'rganayotgan texnologiyalarimni haqida ma'lumot olishingiz mumkin.</p>
          {/* <ButtonCommon label={'men haqimda'} classHandler='bg-green-600 text-white' /> */}
        </div>
        <div className='flex-1 w-64 border'>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSIQXYT8d96Tu9guAdZqUBaSfuJJdf2Zyqw&s" alt=""  className='w-[250px]  mx-auto' /> */}
        </div>
    </div>
  )
}

export default HeroSection