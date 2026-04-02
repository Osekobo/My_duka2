import { createContext, useEffect, useState } from 'react'

const url = import.meta.env.VITE_API_URL
const AuthContext = createContext()
export const useAuth = createContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState()
  // a function that 
  const checkAuth = async () => {
    try {
      const response = await axios.get(`${url}+ me`, {
        withCredentials: true
      })
      setUser(response.data)
      setIsAuthenticated(false)
    } catch (err) {
      console.log(err)
      setUser(null)
      setIsAuthenticated(false)
    }
  }
  useEffect(() => {
    checkAuth()
  }, [])
  const logout = async () => {
    try{

    }catch(err){

    }}
  }
  return AuthContext.Provider()
}
