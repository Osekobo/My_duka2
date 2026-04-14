import axios from 'axios'
import { createContext, useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { registerService } from '../services/registerService';

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
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${url}/me`, {
        withCredentials: true
      })

      if (response.data.email) {
        setUser(response.data)
        setIsAuthenticated(true)
        if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.log("Not authenticated:", err.response?.status)
      setUser(null)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      const res = await registerService(userData)

      if (res) {
        const loginResult = await login(userData.email, userData.password)
        if (loginResult.success) {
          return { success: true }
        }
        return { success: false, error: "Registration succeeded but login failed" }
      }
    } catch (err) {
      console.error("Registration error:", err.response?.data)
      let errorMessage = "Registration failed"

      if (err.response?.data?.detail) {
        errorMessage = err.response.data.detail
      } else if (err.response?.data) {
        errorMessage = JSON.stringify(err.response.data)
      }

      return {
        success: false,
        error: errorMessage
      }
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${url}/login`,
        { email, password },
        { withCredentials: true }
      )

      if (response.status === 200) {
        const userResponse = await axios.get(`${url}/me`, {
          withCredentials: true
        })
        setUser(userResponse.data)
        setIsAuthenticated(true)
        navigate("/dashboard")
        return { success: true }
      }
    } catch (err) {
      console.error("Login error:", err.response?.data)
      return {
        success: false,
        error: err.response?.data?.detail || "Login failed"
      }
    }
  }

  const logout = async () => {
    try {
      await axios.post(`${url}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error(err);
    }
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login")
  };

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      logout,
      register,
      loading
    }}>
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