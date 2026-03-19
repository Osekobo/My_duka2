import React from 'react'
import useGetSale from '../hooks/useGetSale'


const SalesHero = () => {
  const { saleData } = useGetSale()
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>Welcome to the sales page</h3>
      {
        saleData.map((sale) => (
          <div key={sale.id}>
            <p>{sale.id}</p>
            <p>{sale.created_at}</p>
            <p>{sale.updated_at}</p>
          </div>
        ))
      }
    </div>
  )
}
export default SalesHero