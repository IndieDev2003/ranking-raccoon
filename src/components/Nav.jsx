import React from 'react'
import { cat } from '../assets/svgs'

function Nav() {
  return (
      <header className='w-full h-20 flex justify-between items-center border-b'>
          <div className='flex items-center justify-center'>
              <img src={cat} className='h-10' alt="" />
              <h2 className='text-xl font-semibold'>Gagan Suman</h2>
          </div>

          <ul className='hidden sm:flex items-center space-x-6'>
              <li>How it Works</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li className='font-medium !text-black'>Login</li>
              <li className='text-lg px-6 py-2 border rounded-full text-white bg-black hover:bg-fuchsia-500'>Sign Up</li>
          </ul>
    </header>
  )
}

export default Nav