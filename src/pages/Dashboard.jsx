import React, { useState } from 'react'
import StatsBox from '../components/dashboard/StatsBox'
import UserTableArea from '../components/dashboard/UserTableArea'
import VehicleTableArea from '../components/dashboard/VehicleTableArea'
import SalesAnalytics from '../components/dashboard/SalesAnalytics'
import OrderStats from '../components/dashboard/OrderStats'
import CustomBtn from '../components/ui/CustomBtn'
import useTabs from '../hooks/useTabs'
const Dashboard = () => {

  const tabs = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" },
    { key: "yearly", label: "Yearly" },
  ];

   const { activeTab, tabs: tabList, onTabClick } = useTabs(tabs, "daily");

  return (
    <>
      <div className="flex flex-wrap items-center justify-center sm:justify-end mb-[10px] gap-1">
        {tabs?.map(({ key, label }) => (
          <CustomBtn key={key} onClick={()=> onTabClick(key)} buttonClass={`min-w-[65px] py-2 px-4 rounded-sm font-plus-jakarta text-sm font-normal text-(--text-gray-200) capitalize bg-(--bg-secondary) hover:bg-(--bg-primary-2) hover:text-(--text-primary) cursor-pointer transition duration-300 ease-in-out ${activeTab === key ? "bg-(--bg-primary) text-(--text-white)" : ""}`} label={label} />
        ))}
      </div>
      {/* {activeTab === 'daily' && ()} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatsBox />
        <SalesAnalytics />
        <OrderStats />
      </div>
      <UserTableArea />
      <VehicleTableArea />
    </>
  )
}

export default Dashboard