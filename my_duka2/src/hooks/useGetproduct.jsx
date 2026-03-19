import { useState, useEffect } from "react"
import { getProduct } from "../services/getProduct"


export const useGetProduct = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProduct()
      setProductData(data)
    }
    fetchProducts()

  }, [])

  return {productData}

}
