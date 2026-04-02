import React from 'react'
import axios from "axios"

const url = import.meta.env.VITE_LOGIN_URL

export const loginService = async (user_details) => {
  const response = await axios.post(url, user_details,
    {
      withCredentials: true
    }
  )
  return response.data
}