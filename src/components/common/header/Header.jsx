import React from 'react'
import Text from '../../ui/Text'
import Image from '../../ui/Image'
import profileImg from '/images/user.png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from 'react-router'
import { NotificationIcon } from '../../ui/Icons'
import CustomBtn from '../../ui/CustomBtn'
import UserWelcome from './UserWelcome';

const Header = ({ openMenuDrawer }) => {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap justify-between gap-x-10 gap-y-2  fixed top-0 left-0 right-0 overflow-hidden ml-auto pt-5 pb-[15px] px-[15px] sm:px-[25px] xl:pl-[48px] w-full xl:w-[calc(100%-312px)] bg-(--bg-white) z-100'>
      <UserWelcome wrapperClass="hidden sm:block"/>
      <div className="flex-row-wrap justify-between gap-6 items-center">
        <div className="flex-row-wrap gap-4 font-urbanist">
          <figure>
            <Image src={profileImg} className='h-[48px] w-[48px] object-cover object-center rounded-full' alt='user-image' />
          </figure>
          <div className="flex flex-col gap-1">
            <Text as='h6' className='text-base font-bold text-(text-gray-800)'>Jack Rick</Text>
            <Text as='small' className='text-(--text-gray-300) text-xs'>Admin</Text>
          </div>
        </div>
        <div className="flex-row-wrap gap-3 sm:gap-6">
          <Link to=''><NotificationIcon /></Link>
          <CustomBtn onClick={openMenuDrawer} buttonClass="bg-transparent dark:bg-transparent text-2xl text-(--text-primary) cursor-pointer block xl:hidden hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent" icon={<HiMiniBars3BottomRight />} />
        </div>
      </div>
    </div>
  )
}

export default Header