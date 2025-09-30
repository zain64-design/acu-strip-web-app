import React from 'react'
import UserProfile from '../components/common/settings/UserProfile'
import UserOptions from '../components/common/settings/UserOptions'
import CustomBtn from '../components/ui/CustomBtn'
import { useNavigate } from 'react-router'

const Settings = () => {
    const navigate = useNavigate();

      const handleLogOut = () => {
    navigate('/')
  }
  return (
    <>
    <div className="card p-[20px_15px] sm:p-[37px_34px_24px_34px] mb-10">
      <UserProfile />
      <UserOptions/>
      <CustomBtn onClick={handleLogOut} buttonClass='btn-primary font-urbanist text-xl md:text-[28px] font-bold mt-[40px] md:mt-[86px] w-full h-[45px] md:h-[71px]' label='logout'/>
    </div>
    </>
  )
}

export default Settings