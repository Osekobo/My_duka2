import React, { useState } from 'react'
import { postProduct } from '../services/postProduct'

export const usePostProduct = () => {
  // Loading products
  const [product, setProduct] = useState({
    name: "",
    buying_price: "",
    selling_price: "",
    model: "",
    year: "",
    condition: "",
    fuel: ""
  })
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }))

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const payload ={
    //     ...productData,
    //     buying_price:Number(productData.buying_price),
    //     selling_price:Number(productData.selling_price)
    // }

    setloading(true)
    setError(null)
    try {
      await postProduct(product)
      setProduct({ name: "", buying_price: "", selling_price: "", model: "", year: "", condition: "", fuel: "" })
    } catch {
      // console.log(err)
      setError("Failed to post product")
    }
    setloading(false)
  }
  return {
    product, handleChange, handleSubmit, loading, error
  }
}