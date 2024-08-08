import { CiSettings } from 'react-icons/ci';
import { FaGhost } from 'react-icons/fa6';
import { ImCommand } from 'react-icons/im';
import { v4 as uuidv4 } from 'uuid';

const MySkillsData = [
    {
       id:  uuidv4(),
       label: "fron-end",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       icon: <ImCommand className='size-20'/>,
    },
    {
       id:  uuidv4(),
       label: "back-end",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       icon: <CiSettings className='size-20'/>,
    },
    {
       id:  uuidv4(),
       label: "ai",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
       icon: <FaGhost className='size-20'/>,
    },
]

export default MySkillsData