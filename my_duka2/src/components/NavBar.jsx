import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  FaHome,
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaCashRegister,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa'

const NavBar = () => {
  const { user, isAuthenticated, logout, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  // Don't show the full navbar on login/register pages (optional)
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'
  
  if (loading) {
    return (
      <nav className='bg-gray-400 p-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='text-xl font-bold text-gray-100 no-underline'>
            MYDUKA
          </Link>
          <div className="text-white">Loading...</div>
        </div>
      </nav>
    )
  }
  
  return (
    <nav className='bg-gray-400 p-4'>
      <div className='flex items-center justify-between'>
        <div>
          <Link to='/' className='flex items-center gap-2 text-xl font-bold text-gray-100 no-underline'>
            MYDUKA
          </Link>
        </div>
        <div className='flex gap-6'>
          {/* Home link - always visible */}
          <Link to='/' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition no-underline'>
            <FaHome /> Home
          </Link>

          {/* Only show these links if authenticated */}
          {isAuthenticated && (
            <>
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
            </>
          )}
          
          {/* Show login/register or user info based on auth status */}
          {!isAuthenticated ? (
            <>
              <Link to='/login' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
                <FaSignInAlt /> Login
              </Link>

              <Link to='/register' className='flex items-center gap-2 text-gray-800 hover:text-blue-600 transition'>
                <FaUserPlus /> Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-800">
                {user?.email || 'User'}
              </span>
              <button 
                onClick={handleLogout} 
                className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
// localStorage.clear()
// sessionStorage.clear()