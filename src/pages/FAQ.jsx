import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import FaqArea from '../components/common/settings/FaqArea'

const FAQ = () => {
  return (
    <>
        <InnerBannerTitle wrapperClass='mt-5 flex items-start gap-[10px] sm:gap-[24px] flex-wrap' smTitle='FAQs' isEdit={true}/>
        <FaqArea/> 
    </>
  )
}

export default FAQ