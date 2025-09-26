import React from 'react'
import CustomBtn from '../../ui/CustomBtn'
import { ArrowLeftIcon } from '../../ui/Icons'
import Text from '../../ui/Text'
import useGoBack from '../../../hooks/useGoBack'

const InnerBannerTitle = ({title}) => {
  const goBack = useGoBack();
  return (
    <>
    <div className="flex items-start gap-[24px]">
      <CustomBtn onClick={goBack} buttonClass='bg-transparent text-(--text-black) hover:bg-transparent cursor-pointer' icon={<ArrowLeftIcon/>}/>
      <Text as='h6' className='font-inter font-bold text-2xl capitalize tracking-[-0.04px]'>{title}</Text>
      <CustomBtn buttonClass='btn-primary h-[52px] font-inter text-base font-semibold min-w-[166px] ml-auto' label='edit'/>
    </div>
    </>
  )
}

export default InnerBannerTitle