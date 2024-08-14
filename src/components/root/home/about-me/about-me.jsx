import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { BsGenderAmbiguous, BsPerson } from 'react-icons/bs'
import { Si3M } from 'react-icons/si'
import { ButtonCommon } from '../../../common'

const AboutMe = () => {
  return (
    <div className='container py-10 px-4'>
        <div className='flex items-center justify-between'>
            <div className='w-[50%]'>
                <ul className='capitalize text-2xl'>
                    <li className='flex items-center justify-start gap-4'>
                        <BsPerson />
                        <h4 className='font-bold'>Turabek Zairovich</h4>
                    </li>
                    <li className='flex items-center justify-start gap-4'>
                        <BiCalendar />
                        <h4 className='font-bold'>18.05.2004</h4>
                    </li>
                    <li className='flex items-center justify-start gap-4'>
                        <BsGenderAmbiguous />
                        <h4 className='font-bold'>erkak</h4>
                    </li>
                </ul>
                <p className='my-4 pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae libero? Beatae dolor minus quibusdam labore omnis eaque voluptates mollitia sed temporibus maxime molestias consectetur et, sint tempora officia suscipit veritatis ipsum eos, totam doloremque commodi quisquam. Quidem atque mollitia inventore ratione, cupiditate non est!</p>
                <ButtonCommon label={'batafsil'} classHandler={'border border-green-600 rounded-sm px-6 text-green-600 hover:text-white hover:bg-green-600 transition-all'} link={'/about-me'} />
            </div>
        </div>
    </div>
  )
}

export default AboutMe