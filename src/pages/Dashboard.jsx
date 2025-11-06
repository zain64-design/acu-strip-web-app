import React, { useEffect } from 'react'
import StatsBox from '../components/dashboard/StatsBox'
import UserTableArea from '../components/dashboard/UserTableArea'
import VehicleTableArea from '../components/dashboard/VehicleTableArea'
import SalesAnalytics from '../components/dashboard/SalesAnalytics'
import OrderStats from '../components/dashboard/OrderStats'
import CustomBtn from '../components/ui/CustomBtn'
import useTabs from '../hooks/useTabs'
import { Activity } from "react";
import { useLazyGetDailyStatsQuery, useLazyGetMonthlyStatsQuery, useLazyGetWeeklyStatsQuery, useLazyGetYearlyStatsQuery } from '../redux/slice/apiSlices/statsApiSlice'
import Text from '../components/ui/Text'
import Skeleton from '../components/ui/Skeleton'

const Dashboard = () => {

  const tabs = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" },
    { key: "yearly", label: "Yearly" },
  ];

  const { activeTab, tabs: tabList, onTabClick } = useTabs(tabs, "daily");

   const [fetchDaily,{ data: dailyData, isLoading: isDailyLoading, isError: isErrorDaily, error: errorMsgDaily } ]= useLazyGetDailyStatsQuery();   
   const [fetchWeekly, { data: weeklyData, isLoading: isWeekLoading, isError: isErrorWeek, error: errorMsgWeek }] = useLazyGetWeeklyStatsQuery();
  const [fetchMonthly, { data: monthlyData, isLoading: isMonthLoading, isError: isErrorMonth, error: errorMsgMonth }] = useLazyGetMonthlyStatsQuery();
  const [fetchYearly, { data: yearlyData, isLoading: isYearLoading, isError: isErrorYear, error: errorMsgYear }] = useLazyGetYearlyStatsQuery();
  

  useEffect(() => {
  fetchDaily();
  
}, []);

    const handleTabClick = (key) => {
    onTabClick(key);
    if (key === 'daily') fetchDaily();
    if (key === 'weekly') fetchWeekly();
    if (key === 'monthly') fetchMonthly();
    if (key === 'yearly') fetchYearly();
    console.log(key);
    
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center sm:justify-end mb-[10px] gap-1">
        {tabs?.map(({ key, label }) => (
          <CustomBtn key={key} onClick={() => handleTabClick(key)} buttonClass={`min-w-[65px] py-2 px-4 rounded-sm font-plus-jakarta text-sm font-normal text-(--text-gray-200) capitalize bg-(--bg-secondary) hover:bg-(--bg-primary-2) hover:text-(--text-primary) cursor-pointer transition duration-300 ease-in-out ${activeTab === key ? "bg-(--bg-primary) text-(--text-white)" : ""}`} label={label} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Activity mode={activeTab === 'daily' ? 'visible' : 'hidden'}>
          {isErrorDaily ? <Text as='h6'>{JSON.stringify(errorMsgDaily?.message || "Failed to load daily stats 😢")}</Text> 
          :isDailyLoading ? Array.from({length:3})?.map((_,index)=> <Skeleton key={index} type="box" className='h-[165px] rounded-lg' />)
          :<StatsBox data={dailyData} />} 
        </Activity>

        <Activity mode={activeTab === 'weekly' ? 'visible' : 'hidden'}>
          {isErrorWeek ? <Text as='h6'>{JSON.stringify(errorMsgWeek?.message || "Failed to load daily stats 😢")}</Text> 
          :isWeekLoading ? Array.from({length:3})?.map((_,index)=> <Skeleton key={index} type="box" className='h-[165px] rounded-lg' />)
          :<StatsBox data={weeklyData} />} 
        </Activity>

        <Activity mode={activeTab === 'monthly' ? 'visible' : 'hidden'}>
          {isErrorMonth ? <Text as='h6'>{JSON.stringify(errorMsgMonth?.message || "Failed to load daily stats 😢")}</Text> 
          :isMonthLoading ? Array.from({length:3})?.map((_,index)=> <Skeleton key={index} type="box" className='h-[165px] rounded-lg' />)
          :<StatsBox data={monthlyData} />} 
        </Activity>

        <Activity mode={activeTab === 'yearly' ? 'visible' : 'hidden'}>
          {isErrorYear ? <Text as='h6'>{JSON.stringify(errorMsgYear?.message || "Failed to load daily stats 😢")}</Text> 
          :isYearLoading ? Array.from({length:3})?.map((_,index)=> <Skeleton key={index} type="box" className='h-[165px] rounded-lg' />)
          :<StatsBox data={yearlyData} />} 
        </Activity>
        
        <SalesAnalytics />
        <OrderStats />
      </div>
      <UserTableArea />
      <VehicleTableArea />
    </>
  )
}

export default Dashboard