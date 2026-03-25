import React from 'react'
import { Menu } from 'lucide-react';

const navigationData = [
    {
        name: 'Home',
        path: '/home',
        id: 1
    },
    {
        name: 'About Us',
        path: '/about-us',
        id: 2
    },
    {
        name: 'Services',
        path: '/Services',
        id: 3
    },
    {
        name: 'Contect Us',
        path: '/Contect Us',
        id: 4
    },
]

const Navber = () => {
  return (
    <div className='flex justify-between items-center px-6 py-2'>
        <div className='flex gap-2'>
            <Menu className='sm:hidden' size={24} color="#3d9bff" strokeWidth={1.75} />
            <h1 className='font-semibold'>NavberIcon</h1>
        </div>
        
        <ul className='flex gap-8 text-sm max-[500px]:hidden'>
            {
                navigationData.map(navData => <li key={navData.id}>{navData.name}</li>)
            }
        </ul>

        
        <button className='rounded-lg bg-blue-400 px-4 py-1 shadow font-semibold hover:bg-blue-500 cursor-pointer '>SingUp</button>
        
    </div>
  )
}

export default Navber
