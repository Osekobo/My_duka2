import axios from "axios"

const getProduct = () => {
  return axios.get("http://127.0.0.1:8000/products")
}

export default getProduct