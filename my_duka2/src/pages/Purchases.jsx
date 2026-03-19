import PurchasesHero from '../components/PurchasesHero'
import { useGetPurchase } from '../hooks/useGetPurchase'

const Purchases = () => {
  const { purchaseData } = useGetPurchase()
  return (
    <div>
      <div>
        <PurchasesHero purchase={purchaseData} />
      </div>
    </div>
  )
}

export default Purchases
