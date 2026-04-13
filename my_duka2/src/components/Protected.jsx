import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

export const Protected = () => {
  const { isAuthenticated, loading } = useAuth() // Add loading

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Only redirect after loading is complete
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}