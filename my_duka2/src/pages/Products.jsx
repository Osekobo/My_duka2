import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductsHero from '../components/ProductsHero'
import ProductsTable from '../components/ProductsTable'

const Products = () => {
  const [productData, setProductData] = useState()
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products')
      .then(response => {
        console.log(response.data)
        setProductData(response.data)
      })
  }, [])
  return (
    <div> 
      <div>
        <ProductsHero />
      </div>
      <div>
        <ProductsTable />
      </div>
    </div>
  )
}
export default Products