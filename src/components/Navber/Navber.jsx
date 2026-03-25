import React from 'react'

const Navber = () => {
  return (
    <div className='flex justify-between px-6 py-2'>
        <div>
            <h1>NavberIcon</h1>
        </div>
        
        
        <ul className='flex gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contect US</li>
        </ul>

        
        <button className='rounded-lg bg-blue-400 px-4 py-1 shadow font-semibold hover:bg-blue-500 cursor-pointer'>SingUp</button>
        
    </div>
  )
}

export default Navber
