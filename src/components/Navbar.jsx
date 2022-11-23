import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] bg-slate-200 z-10'>
      <div className='flex items-center justify-between h-full w-full px-2'>
        <h1 className='text-5xl font-semibold mx-4'>ReBook</h1>
        <ul className="hidden md:flex">
          <li>Genres</li>
          <li>Get Recommendations</li>
          <li> </li>
          <li>Your Favorites</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar