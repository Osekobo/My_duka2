import React from 'react'
import axios from 'axios'

export const getSale = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/sales')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
