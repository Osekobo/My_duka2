import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-gray-200 p-4'>
      <div className='flex gap-4'>
        <Link to='/' className='text-gray-800'>Home</Link>
        <Link to='/products' className='text-gray-800'>Products</Link>
        <Link to='/sales' className='text-gray-800'>Sales</Link>
      </div>
    </nav>
  )
}


export default NavBar
