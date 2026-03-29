import React, { useState } from 'react'
import { postPurchase } from '../services/postPurchase'

export const usePostPurchase = () => {
  // Loading purchases
  const [purchase, setPurchase] = useState({
    quantity: "",
    product_id: "",
    created_at: "",
    updated_at: ""
  })
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setPurchase((prev) => ({
      ...prev,
      [name]: value
    }))

  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    setloading(true)
    setError(null)
    try {
      await postPurchase(purchase)
      setPurchase({ quantity: "", product_id: "", created_at: "", updated_at: "" })
    } catch {
      // console.log(err)
      setError("Failed to post purchase")
    }
    setloading(false)
  }
  return {
    purchase, handleChange, handleSubmit, loading, error
  }
}