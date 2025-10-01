import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import DescArea from '../components/common/settings/DescArea'
const About = () => {
  return (
    <>
    <InnerBannerTitle wrapperClass='mt-5 flex items-start gap-[10px] sm:gap-[24px] flex-wrap' smTitle='About App' isEdit={true}/>
    <DescArea/>
    </>
  )
}

export default About