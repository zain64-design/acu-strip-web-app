import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import FaqArea from '../components/common/settings/FaqArea'

const FAQ = () => {
  return (
    <>
        <InnerBannerTitle wrapperClass='mt-5 flex items-start gap-[24px]' smTitle='FAQs'/>
        <FaqArea/> 
    </>
  )
}

export default FAQ