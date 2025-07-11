import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between bg-[#1c1c1c] w-full'>
      <h1 className='text-xl text-white text-medium'>Hello <br /><span className='text-2xl font-semibold text-white'> Aviral 👋</span></h1>
      <button className='bg-red-600 p-1 text-white'>Logout</button>
    </div>
  )
}

export default Header
