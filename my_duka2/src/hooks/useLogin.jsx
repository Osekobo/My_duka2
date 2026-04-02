import { useState } from "react"
import { loginService } from "../services/loginService"
import { useNavigate } from "react-router-dom"


export const useLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)//false
    setError(null)
    try {
      const res = await loginService(user)
      console.log(res)
      navigate("/dashboard")
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed")//handle backend,network and unknown errors
    } finally {
      setLoading(false)
    }
  }
  return {
    user, handleChange, handleSubmit, loading, error
  }
}

