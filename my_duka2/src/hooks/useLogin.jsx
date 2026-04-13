import { useState } from "react"
import { loginService } from "../services/loginService"
import { useAuth } from "../context/AuthContext"
// import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth()
  // const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await loginService(user)
      console.log(res.user) // Fixed typo: console -> console.log
      
      // Call the login function from AuthContext to store user data
      if (login) {
        login(res.user)
      }
      
      return true
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed")
      return false
    } finally {
      setLoading(false)
    }
  }
  
  return {
    user, 
    handleChange, 
    handleSubmit, 
    loading, 
    error
  }
}