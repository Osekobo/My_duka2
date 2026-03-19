import { useState, useEffect } from "react"
import { getSale } from "../services/getSale"


export const useGetSale = () => {

  const [saleData, setSaleData] = useState([])

  useEffect(() => {
    const fetchSales = async () => {
      const data = await getSale()
      setSaleData(data)
    }
    fetchSales()

  }, [])

  return { saleData }

}

export default useGetSale