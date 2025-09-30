import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import NotificationArea from '../components/common/settings/NotificationArea'

const Notification = () => {
  return (
    <>
    <div className="card p-[20px_15px] xl:p-[31px_35px_31px_58px] mb-10">
        <InnerBannerTitle smTitle='Notifications' smTitleClass='mx-auto text-center' arrowBtnClass='absolute top-0 left-auto' wrapperClass='relative mb-[44px]'/>
        <NotificationArea/>
    </div>
    </>
  )
}

export default Notification