import React from 'react'
import { MyTechnologiesData } from '../../../../constants'

const MyTechnologies = () => {
  return (
    <div className='container mx-auto flex items-center justify-center gap-4 py-10'>
        {
            MyTechnologiesData.map(({id, label, icon}) => (
                <div key={id} className='flex-1 text-8xl text-green-600 flex justify-center'>
                    {icon}
                </div>
            ))
        }
    </div>
  )
}

export default MyTechnologies