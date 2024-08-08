import React from 'react'
import { Link } from 'react-router-dom';

const ButtonCommon = (
    { label,
        icon,
        link,
        classHandler = '',
        clickHandler = () => { console.log('clicked'); }
    }
) => {
    if (!link) {
        return (
            <button className={`flex items-center justify-center gap-2 capitalize p-2 ${classHandler} rounded-md hover:shadow-[0_0_5px_0_#ddd]`} onClick={() => clickHandler()}>
                {icon ? icon : ''}
                {label ? <span>{label}</span> : ''}
            </button>
        )
    }
    return (
        <button className={`p-2 ${classHandler}`} onClick={() => clickHandler()}>
            <Link to={link} className='flex items-center justify-center gap-2 capitalize w-full bg-transparent'>
                {icon ? icon : ''}
                <span>{label}</span>
            </Link>
        </button>
    )
}

export default ButtonCommon