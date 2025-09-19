import React from 'react'
import Text from '../../ui/Text'
import Image from '../../ui/Image'
import profileImg from '/images/user.png'
import { Link } from 'react-router'
import { NotificationIcon } from '../sidebar/SideIcons'

const Header = () => {
  return (
    <div className='flex flex-row justify-between fixed top-0 left-0 right-0 overflow-hidden ml-auto pt-5 pb-[15px] pl-[48px] pr-[25px] w-[calc(100%-58px)] xl:w-[calc(100%-312px)] bg-(--bg-white) z-100'>
      <div className="flex flex-col font-urbanist">
        <Text as='h6' className='font-medium text-(text-gray-800) capitalize text-2xl'><Text as='span' className='font-bold'>Hi,</Text> James Rick</Text>
        <Text as='p' className='text-(--text-gray-300) text-base'>Let’s manage customers</Text>
      </div>
      <div className="flex flex-row flex-wrap gap-6 items-center">
        <div className="flex flex-row flex-wrap gap-4 font-urbanist">
          <figure>
            <Image src={profileImg} className='h-[48px] w-[48px] object-cover object-center rounded-full' alt='user-image'/>
          </figure>
          <div className="flex flex-col gap-1">
            <Text as='h6' className='text-base font-bold text-(text-gray-800)'>Jack Rick</Text>
          <Text as='small' className='text-(--text-gray-300) text-xs'>Admin</Text>
          </div>
        </div>
        <Link to=''><NotificationIcon/></Link>
      </div>
    </div>
  )
}

export default Header