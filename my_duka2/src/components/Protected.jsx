import React from 'react'
import {Navigate,Outlet} from "../context/AuthContext"
import { useAuth } from "../context/AuthContext"

const Protected = () => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }
  return <Outlet/>
}

export default Protected
