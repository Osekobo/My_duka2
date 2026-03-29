import DashboardHero from "../components/DashboardHero"
import DashboardForm  from "../components/DashboardForm"
import { useDashboardData } from "../hooks/useDashboardData"

const Dashboard = () => {
  const dashboardData = useDashboardData()

  return (
    <>
    <div>
      <DashboardHero data={dashboardData} />
    </div>
    <div>
      <DashboardForm />
    </div>
    </>
  )
}

export default Dashboard
