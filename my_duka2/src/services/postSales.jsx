import axios from 'axios'

const sales_url = import.meta.env.VITE_SALES_URL

export const postSales = async (sales_details) => {
  const response = await axios.post(sales_url, sales_details)
  return response.data
}