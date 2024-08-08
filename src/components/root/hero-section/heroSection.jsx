import React from 'react'
import { ButtonCommon } from '../../common'
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
    <div className='w-[60%] py-20 mx-auto text-center'>
        <h1 className='text-6xl font-medium tracking-wide leading-tight'>
        <span className='text-green-600'>asSalamu alaykum </span>
        va rahmatullah.
      </h1>
      <p className='text-lg text-gray-500 my-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur dignissimos autem voluptatem ab a et! Vel autem est soluta exercitationem, molestiae eos quae quasi nam commodi vitae labore magni aliquam ullam consequuntur porro laboriosam perferendis fugit iure? Fugit provident sit, aliquid ea molestiae consequuntur.
      </p>
      <ButtonCommon icon={<BiDownArrow className='size-12 text-green-600 animate-[bounce_2.75s_infinite] linear' />} classHandler='my-4 mx-auto px-8 bg-white/50 hover:shadow-none' clickHandler={() => toDownHandler()} />
    </div>
  )
}

export default HeroSection