import React from 'react'
import { MySkillsData } from '../../../../constants'

const MySkills = () => {
  return (
    <div className='bg-green-600 py-6'>
        <h3 className='text-2xl text-center text-white'># Mening Ko'nikmalarim</h3>
        <p className='text-center mt-2 mb-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia neque perspiciatis tenetur provident sequi.</p>
        <div className='flex items-center justify-around '>
            {
                MySkillsData.map(({id, label, description, icon}) => (
                    <div className='w-[350px] text-center bg-white p-6 hover:shadow-[5px_5px_5px] hover:shadow-green-500/50 rounded-md' key={id}>
                        <div className='flex justify-center py-3 text-green-600'>{icon}</div>
                        <div>
                            <h3 className='text-2xl font-medium my-2 uppercase'>{label}</h3>
                            <p className='text-md text-gray-600'>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MySkills