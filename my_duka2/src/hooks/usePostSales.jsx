import React, { useState } from 'react'
import { postSales } from '../services/postSales'

export const usePostSales = () => {
  // Loading sales
  const [sales, setSales] = useState({
    // quantity: "",
    id: "",
    created_at: "",
    updated_at: ""
    // sale_id: "",
    // product_id: "",
    // quantity: ""
  })
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setSales((prev) => ({
      ...prev,
      [name]: value
    }))

  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    setloading(true)
    setError(null)
    try {
      await postSales(sales)
      setSales({
        id: "",
        created_at: "",
        updated_at: ""
      })
    } catch {
      // console.log(err)
      setError("Failed to post sales")
    }
    setloading(false)
  }
  return {
    sales, handleChange, handleSubmit, loading, error
  }
}