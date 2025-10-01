import React from 'react'
import { Link } from 'react-router'
import Text from '../../ui/Text'
import { ChevronSharpIcon, LockIcon, NoteBookIcon, QuestionIcon, ShieldCheckIcon, ShieldLockIcon, UserEditIcon } from '../../ui/Icons'

const UserOptions = () => {

  const userNavigation = [
    { id:1,name:'Edit Profile', route: '/settings/edit-profile',icon:<UserEditIcon/> },
    { id:2,name:'Change Password', route: '/settings/change-password',icon: <ShieldCheckIcon/> },
    { id:3,name:'About App', route: '/settings/about', icon:<NoteBookIcon/> },
    { id:4,name:'Privacy Policy', route: '/settings/privacy', icon: <LockIcon/> },
    { id:5,name:'FAQs', route: '/settings/faq', icon: <QuestionIcon/> },
    { id:6,name:'Terms & Conditions', route: '/settings/terms-conditions', icon: <ShieldLockIcon/> },
  ]

  return (
    <>
    <Text as='ul' className='[&>li:not(:last-child)]:pb-[35px] mt-5 sm:mt-[9px]'>
      {userNavigation.map(({id,name,route,icon})=> (
        <li key={id}>
          <Link to={route} className='w-full flex gap-2 sm:gap-[19px] flex-row flex-start items-center font-inter font-normal text-base md:text-lg text-(--text-black) cursor-pointer hover:text-(--text-primary) transition duration-300 ease-in-out pl-11 relative'>
          <Text as='span' className='absolute left-0'>{icon}</Text>
          <Text as='span'>{name}</Text>
          <ChevronSharpIcon className='ml-auto'/></Link>
        </li>
      ))}
    </Text>
    </>
  )
}

export default UserOptions