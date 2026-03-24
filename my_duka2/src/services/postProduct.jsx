import axios from 'axios'

const product_url = import.meta.env.VITE_PRODUCTS_URL

export const postProduct = async (product_details) => {
  const response = await axios.post(product_url, product_details)
  return response.data
}


// export const postProduct = async (product_details) => {
//   try {
//     const response = await axios.post(product_url, product_details)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }
