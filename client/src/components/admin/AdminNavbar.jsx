import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to='/' className='flex items-center max-md:flex-1'>
        <img src={assets.logo} alt="" className='w-15 h-auto' />
        <h1 className='text-xl font-bold text-orange-400'>Show</h1>
      </Link>
    </div>
  )
}

export default AdminNavbar
