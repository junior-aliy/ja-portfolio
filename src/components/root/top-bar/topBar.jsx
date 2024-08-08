import React from 'react'
import { ButtonCommon } from '../../common'
import { PiPhoneCall } from 'react-icons/pi'
import { GrLanguage } from 'react-icons/gr'
import { CgDarkMode } from 'react-icons/cg'

const TopBar = () => {
  return (
    <div className='container flex p-3 border-b-2'>
        <h3 className="flex-none w-32 border border-sm border-green-600 logo flex items-center text-xl overflow-hidden justify-center relative after:absolute after:left-[47.5%] after:w-full after:h-full after:content-[''] after:bg-green-600 after:z-[-1] after:tranlateX-[-50%] uppercase">Lo<span className='text-white px-1'>go</span></h3>
        <div className='grow'></div>
        <div className='flex-auto w-14 flex items-center justify-end gap-2'>
            <ButtonCommon icon={<CgDarkMode className='size-5' />}/>
            <ButtonCommon icon={<GrLanguage className='size-5' />}/>
            <ButtonCommon label={'men bilan bog\'lanish'} icon={<PiPhoneCall className='size-5'/>} classHandler='rounded-sm px-3 bg-green-600 text-white hover:shadow-[0_0_7.5px_0_green] transition-all' link={'/contact-me'}/>
        </div>
    </div>
  )
}

export default TopBar