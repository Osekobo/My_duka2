import React from 'react'
import axios from "axios"

// const url = import.meta.env.VITE_REGISTER_URL

// export const registerService = async (user_details) => {
//   const response = await axios.post(url, user_details,
//     {
//       withCredentials: true
//     }
//   )
//   return response.data
// }
// services/verifyAuthService.jsx
const url = import.meta.env.VITE_REGISTER_URL

export const registerService = async (user_details) => {
  try {
    const response = await axios.post(url, user_details, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    console.error("Register service error:", error.response?.data)
    throw error
  }
}