import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import DescArea from '../components/common/settings/DescArea'
const TermsCondition = () => {
  return (
    <>
      <InnerBannerTitle wrapperClass='mt-5 flex items-start gap-[24px]' smTitle='Terms & Conditions' />
      <DescArea />
    </>
  )
}

export default TermsCondition