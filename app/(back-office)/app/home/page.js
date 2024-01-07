'use client'
import { useRouter } from "next/navigation"

const DashboardPage = () => {
  const router = useRouter()

  router.push('/app/home/inventory-dashboard');
  
}

export default DashboardPage