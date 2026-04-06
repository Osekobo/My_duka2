import React from 'react'
import { AuthProvider, useAuth } from "../context/AuthContext"
// import { useAuth } from "../context/AuthContext"

export const Protected = () => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <AuthProvider to='/login' replace />
  }
  return <useAuth />
}

// export default Protected
