import React from 'react'
import axios from 'axios'

export const getPurchase = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/purchase')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
