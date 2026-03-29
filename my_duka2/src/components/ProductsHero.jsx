import React from 'react'
import { useGetProduct } from '../hooks/useGetProducts'

const ProductsHero = () => {
  const { productData } = useGetProduct()
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>
        Welcome to the products page
      </h3>

      <div className="table-responsive m-4">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Model</th>
              <th>Year</th>
              <th>Condition</th>
              <th>Fuel</th>
              <th>Edit Product</th>
            </tr>
          </thead>

          <tbody>
            {productData.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.buying_price}</td>
                <td>{product.selling_price}</td>
                <td>{product.model}</td>
                <td>{product.year}</td>
                <td>{product.condition}</td>
                <td>{product.fuel}</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    Edit
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  )
}
export default ProductsHero