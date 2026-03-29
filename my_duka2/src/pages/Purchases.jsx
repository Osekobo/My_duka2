import PurchasesHero from '../components/PurchasesHero'
import { useGetPurchase } from '../hooks/useGetPurchase'
import { usePostPurchase } from '../hooks/userPostPurchase'
import PurchaseForm from '../components/PurchaseForm'

const Purchases = () => {
  const { purchaseData } = useGetPurchase()
  const purchaseHook = usePostPurchase()
  return (
    <div>
      <div>
        <PurchasesHero purchase={purchaseData} />
      </div>
      <div>
        <PurchaseForm {...purchaseHook} />
      </div>
    </div>
  )
}

export default Purchases
