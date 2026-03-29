import { useGetSale } from '../hooks/useGetSale'
import SalesHero from '../components/SalesHero'
import { usePostSales } from "../hooks/usePostSales"
import SalesForm from "../components/SalesForm"


const Sales = () => {
  const { salesData } = useGetSale()
  const salesHook = usePostSales()
  return (
    <div>
      <div>
        <SalesHero sales={salesData} />
      </div>
      <div>
        <SalesForm {...salesHook} />
      </div>
    </div>
  )
}

export default Sales
