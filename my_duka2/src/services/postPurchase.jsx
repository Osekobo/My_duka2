import axios from 'axios'

const purchase_url = import.meta.env.VITE_PURCHASE_URL

export const postPurchase = async (purchase_details) => {
  const response = await axios.post(purchase_url, purchase_details)
  return response.data
}