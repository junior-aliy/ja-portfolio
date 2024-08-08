import React, { useEffect, useState } from 'react'
import { NavbarData } from '../../../constants'
import { NavLink, useLocation } from 'react-router-dom'
import { BsGeoAlt } from 'react-icons/bs'

const changeTitle = (location) => {
    switch (location) {
        case '':
            document.title = `Junior Aliy`;
            break
        case 'service':
            document.title = `JA - ${location}`;
            break
        case 'portfolio':
            document.title = `JA - ${location}`;
            break
        case 'about-me':
            document.title = `JA - ${location}`;
            break
        case 'contact-me':
            document.title = `${location} - JA`;   
            break
    }
}

const Navbar = () => {
    const [isHere, setIsHere] = useState('')
    const location = useLocation()

    useEffect(() => {
        setIsHere(location.pathname)
        changeTitle(location.pathname.slice(1))
    }, [location.pathname])

  return (
    <div className={`container sticky top-1 relative w-[97.5%] mx-auto my-1 rounded-md bg-white z-10 overflow-hidden shadow-lg`}>
        <ul className='w-[50%] flex items-center justify-start gap-1'>
            {
                NavbarData.map(({label, path}) => (
                    <li key={label} className={`relative flex-auto group after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[7.5%] after:content-[""] after:bg-green-600 after:-z-10 ${isHere == path ? 'after:w-full' :''} hover:after:w-full transition-all`}>
                        <NavLink to={path} className={' flex flex-col items-center capitalize py-2 transition-[all_0.3s_linear]'}>
                            <BsGeoAlt className={`size-5 animate-bounce text-green-700 ${isHere !== path ? 'invisible translate-y-10' : ''}`}/>
                            <span>{label}</span>
                        </NavLink>
                    </li>
                ) )
            }
        </ul>
    </div>
  )
}
export default Navbar