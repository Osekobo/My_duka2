import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import {
  FaHome,
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaCashRegister,
  FaSignInAlt,
  FaUserPlus,
  FaStore
} from 'react-icons/fa'

const NavBar = () => {
  const { user, isAthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }
  return (
    <nav className='bg-gray-300 p-4'>
      <div className='flex items-center justify-between'>
        <div>
          <Link to='/' className='flex items-center gap-2 text-xl font-bold text-gray-800 no-underline'>
            <FaStore />
            MyDuka
          </Link>
        </div>
        <div className='flex gap-6'>
          <Link to='/' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition no-underline'>
            <FaHome /> Home
          </Link>

          {isAthenticated && (
            <>
              {/* Protectet routes */}
            </>
          )}

          <Link to='/dashboard' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
            <FaTachometerAlt /> Dashboard
          </Link>

          <Link to='/products' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
            <FaBoxOpen /> Products
          </Link>

          <Link to='/purchases' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
            <FaShoppingCart /> Purchases
          </Link>

          <Link to='/sales' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
            <FaCashRegister /> Sales
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link to='/login' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
            <FaSignInAlt /> Login
          </Link>

          <Link to='/register' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
            <FaUserPlus /> Register
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
