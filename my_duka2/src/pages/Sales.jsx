import { useGetSale } from '../hooks/useGetSale'
import SalesHero from '../components/SalesHero'

const Sales = () => {
  const { salesData } = useGetSale()
  return (
    <div>
      <div>
        <SalesHero sales={salesData} />
      </div>
    </div>
  )
}

export default Sales
