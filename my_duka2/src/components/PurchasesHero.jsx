import React from 'react'
import { useGetPurchase } from '../hooks/useGetPurchase'

const PurchasesHero = () => {
  const { purchaseData } = useGetPurchase()
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>
        Welcome to the purchases page
      </h3>

      <div className="table-responsive m-4">
        <table className="table table-sm table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {purchaseData.map((purchase) => (
              <tr key={purchase.id}>
                <td>{purchase.id}</td>
                <td>{purchase.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}
export default PurchasesHero