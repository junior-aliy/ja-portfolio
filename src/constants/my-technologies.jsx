import { SiAxios, SiCss3, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { v4 as uuid } from 'uuid'
const MyTechnologiesData = [
    {
        id: uuid(),
        label: 'html',
        icon: <SiHtml5 />
    },
    {
        id: uuid(),
        label: 'css',
        icon: <SiCss3/>
    },
    {
        id: uuid(),
        label: 'javascript',
        icon: <SiJavascript />
    },
    {
        id: uuid(),
        label: 'react-js',
        icon: <SiReact />
    },
    {
        id: uuid(),
        label: 'tailwind-css',
        icon: <SiTailwindcss />
    },
    {
        id: uuid(),
        label: 'react-redux',
        icon: <SiRedux />
    },
    {
        id: uuid(),
        label: 'node-js',
        icon: <SiNodedotjs />
    },
    {
        id: uuid(),
        label: 'mongo-db',
        icon: <SiMongodb />
    },
]

export default MyTechnologiesData