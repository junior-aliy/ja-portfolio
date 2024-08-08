import React from 'react'
import { MySkillsData } from '../../../../constants'

const MySkills = () => {
  return (
    <div className='flex items-center justify-around'>
        {
            MySkillsData.map(({id, label, description, icon}) => (
                <div className='w-[350px]' key={id}>
                    <div>{icon}</div>
                    <div>
                        <h3 className='text-2xl font-medium text-center my-2'>{label}</h3>
                        <p className=''>{description.length >= 15 ? description.slice(21) : 'false'}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default MySkills