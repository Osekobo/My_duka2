import { useState, useEffect } from "react"
import getProduct from "../services/getProduct"

const useGetProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProduct()
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return products
}

export default useGetProduct