import React from 'react'
import Text from '../../ui/Text'
import FaqAccordion from './FaqAccordion'

const FaqArea = () => {
  return (
    <>
    <div className="w-full lg:w-[calc(100%-128px)] mt-[37px]">
        <Text as='h4' className='font-inter font-bold text-xl sm:text-2xl text-(--text-black-200) capitalize mb-4'>We’re here to help you</Text>
        <Text as='p' className='font-inter font-normal text-md sm:text-lg text-(--text-black-200) leading-[20px]'>Please check our FAQ’s below if you’ve any issue regarding our app guide and usage</Text>
        <FaqAccordion/>
    </div>
    </>
  )
}

export default FaqArea