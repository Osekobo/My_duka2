import ProductsHero from '../components/ProductsHero'
import { useGetProduct } from '../hooks/useGetproduct'
const Products = () => {
  const {productData}=useGetProduct()
  return (
    <div>
      
      <div>
        <ProductsHero products={productData}/>
      </div>
    </div>
  )
}
export default Products