import axios from 'axios'
import { createContext, useEffect, useState, useContext } from 'react'

const url = import.meta.env.VITE_API_URL
const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true) // ADD THIS LINE

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${url}/me`, {
        withCredentials: true
      })
      setUser(response.data)
      setIsAuthenticated(true)
    } catch (err) {
      console.log(err)
      setUser(null)
      setIsAuthenticated(false)
    } finally {
      setLoading(false) // ADD THIS LINE -非常重要
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  const login = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = async () => {
    try {
      await axios.post(`${url}/logout`, {}, { withCredentials: true })
    } catch (err) {
      console.error(err)
    }
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}> {/* ADD loading here */}
      {children}
    </AuthContext.Provider>
  )
}


// VITE_PRODUCTS_URL='http://127.0.0.1:8000/products'
// VITE_PURCHASE_URL='http://127.0.0.1:8000/purchase'
// VITE_SALES_URL='http://127.0.0.1:8000/sales'
// VITE_DASHBOARD_URL='http://127.0.0.1:8000/dashboard/spp'
// VITE_LOGIN_URL='http://127.0.0.1:8000/login'
// VITE_API_URL='http://127.0.0.1:8000'