import React from 'react'
import StatsBox from '../components/dashboard/StatsBox'
import UserTableArea from '../components/dashboard/UserTableArea'
import VehicleTableArea from '../components/dashboard/VehicleTableArea'
import SalesAnalytics from '../components/dashboard/SalesAnalytics'
import OrderStats from '../components/dashboard/OrderStats'
const Dashboard = () => {
  return (
    <>
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-6">
          <StatsBox/>
          <SalesAnalytics/>
          <OrderStats/>
    </div>
    <UserTableArea/>
    <VehicleTableArea/>
    </>
  )
}

export default Dashboard