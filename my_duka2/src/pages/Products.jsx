import ProductsHero from '../components/ProductsHero'
import { useGetProduct } from '../hooks/useGetProducts'
import ProductForm from '../components/ProductForm'
import { usePostProduct } from '../hooks/usePostProduct'

const Products = () => {
  const { productData } = useGetProduct()
  const productHook = usePostProduct()

  return (
    <div>
      <div>
        <ProductsHero products={productData} />
      </div>
      <div>
        <ProductForm {...productHook} />
      </div>
    </div>
  )
}
export default Products