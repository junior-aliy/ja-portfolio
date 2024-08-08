import React from 'react'
import { ButtonCommon } from '../../common'
import { BsSend } from 'react-icons/bs'
import { MdOutlineSend, MdTurnRight } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
import { RiGhostLine } from 'react-icons/ri'
import { LuChevronsLeftRight, LuChevronsRight } from 'react-icons/lu'
import { BiRightArrow } from 'react-icons/bi'

const MessageModal = () => {
  return (
    <div className='fixed w-[350px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 border rounded-md shadow'>
        <h3 className='text-center text-2xl relative mb-4 after:absolute after:top-8 after:left-[50%] after:w-20 after:translate-x-[-50%] after:h-[10%] after:content-[" "] after:bg-green-600'>Habarnoma</h3>
        <form action='#'>
            <div className='flex flex-col p-1 bg-transparent border border-green-600 rounded-sm'>
            <label htmlFor="email" className='text-gray-500 text-[12px] capitalize flex items-center gap-1'>
                    <BiRightArrow className='size-3' />
                    <span>elektron pochtangizni kiriting</span>
                </label>
                <input type="email" id='email' placeholder='junior@gmail.com' className='outline-none border-b-[1px_solid_#999] text-sm p-1' />
            </div>
            <div className='flex flex-col border p-1 my-4 border-green-600 rounded-sm'>
                <label htmlFor="text" className='text-gray-500 text-[12px] capitalize flex items-center gap-1'>
                    <BiRightArrow className='size-3' />
                    <span>habarni kiriting</span>
                </label>
                <textarea name="text" placeholder='fikringizni bildiring' id="text" className='outline-none px-1 text-sm resize-none' cols={10} rows={3}></textarea>
            </div>
        </form>
        <ButtonCommon label={'habarni yuborish'} icon={<AiOutlineSend className='size-5' />} classHandler='w-full bg-green-600 text-white' />
    </div>
  )
}

export default MessageModal