import React from 'react'
import { useGetPurchase } from '../hooks/useGetPurchase'

const PurchasesHero = () => {
  const { purchaseData } = useGetPurchase()
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>Welcome to the purchases page</h3>
      {
        purchaseData.map((purchase) => (
          <div key={purchase.id}>
            <p>{purchase.id}</p>
            <p>{purchase.quantity}</p>
          </div>
        ))
      }
    </div>
  )
}
export default PurchasesHero