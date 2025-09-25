import React from 'react'
import UserProfile from '../components/common/settings/UserProfile'
import UserOptions from '../components/common/settings/UserOptions'
import CustomBtn from '../components/ui/CustomBtn'

const Settings = () => {
  return (
    <>
    <div className="card p-[37px_34px_24px_34px] mb-10">
      <UserProfile />
      <UserOptions/>
      <CustomBtn buttonClass='btn-primary font-urbanist text-[28px] font-bold mt-[40px] md:mt-[86px] w-full h-[45px] md:h-[71px]' label='logout'/>
    </div>
    </>
  )
}

export default Settings