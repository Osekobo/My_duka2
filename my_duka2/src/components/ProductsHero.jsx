import React from 'react'
import { useGetProduct } from '../hooks/useGetProducts'

const ProductsHero = () => {
  const { productData } = useGetProduct()
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>Welcome to the products page</h3>
      {
        productData.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.buying_price}</p>
            <p>{product.selling_price}</p>
          </div>
        ))
      }
    </div>
  )
}
export default ProductsHero