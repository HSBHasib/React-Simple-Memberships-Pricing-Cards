import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

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
  const [open, setOpen] = useState(false);

  const navInfo = navigationData.map(navData => <li className='hover:bg-blue-800 active:scale-50 rounded-md px-2 py-1 cursor-pointer' key={navData.id}>{navData.name}</li>);

  return (
    <div className='flex justify-between items-center px-6 py-3 '>
        <div className='flex gap-1.5 list-none relative' onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu className='sm:hidden' size={24} color="#3d9bff" strokeWidth={1.75} />}
            <ul className={`text-sm absolute left-3 duration-700
                    ${open ? 'top-6' : '-top-40'}`
                }>
                {navInfo}
            </ul>
            <h1 className='font-semibold'>NavberIcon</h1>
        </div>
        
        <ul className='sm:flex gap-8 text-sm max-[500px]:hidden'>
            {
                navInfo
            }
        </ul>

        <button className='rounded-lg bg-blue-400 px-4 py-1 shadow font-semibold hover:bg-blue-500 cursor-pointer '>SingUp</button>       
    </div>
  )
}

export default Navber

