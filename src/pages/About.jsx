import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import DescArea from '../components/common/settings/DescArea'
const About = () => {
  return (
    <>
    <InnerBannerTitle wrapperClass='mt-5 flex items-start gap-[24px]' smTitle='About'/>
    <DescArea/>
    </>
  )
}

export default About