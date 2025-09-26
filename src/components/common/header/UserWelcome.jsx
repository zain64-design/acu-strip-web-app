import React from 'react'
import Text from '../../ui/Text'

const UserWelcome = ({wrapperClass}) => {
  return (
    <div className={`font-urbanist ${wrapperClass}`}>
        <Text as='h6' className='font-medium text-(text-gray-800) capitalize text-2xl'><Text as='span' className='font-bold'>Hi,</Text> James Rick</Text>
        <Text as='p' className='text-(--text-gray-300) text-base'>Let’s manage customers</Text>
      </div>
  )
}

export default UserWelcome