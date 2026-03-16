import React from "react"
import useGetProduct from "../hooks/useGetproduct"

const ProductInfo = () => {

  const products = useGetProduct()

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.buying_price}</p>
          <p>{product.selling_price}</p>
        </div>
      ))}

    </div>
  )
}

export default ProductInfo