import React from 'react'
import StatsBox from '../components/dashboard/StatsBox'
import UserTableArea from '../components/dashboard/UserTableArea'
import VehicleTableArea from '../components/dashboard/VehicleTableArea'
const Dashboard = () => {
  return (
    <>
    <StatsBox/>
    <UserTableArea/>
    <VehicleTableArea/>
    </>
  )
}

export default Dashboard