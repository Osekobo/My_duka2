import { useState, useEffect } from "react"
import { getPurchase } from "../services/getPurchase"


export const useGetPurchase = () => {

  const [purchaseData, setPurchaseData] = useState([])

  useEffect(() => {
    const fetchPurchases = async () => {
      const data = await getPurchase()
      setPurchaseData(data)
    }
    fetchPurchases()

  }, [])

  return { purchaseData }

}
