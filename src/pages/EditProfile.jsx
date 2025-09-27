import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import UserEditProfile from '../components/common/settings/UserEditProfile'
const EditProfile = () => {
    return (
        <>
            <div className="card p-[20px_15px] md:p-[56px_34px_24px] mb-10">
                <InnerBannerTitle lgTitle='Edit Profile' lgTitleClass='mx-auto text-center' arrowBtnClass='absolute top-0 left-auto' wrapperClass='relative lg:pl-[23px] mb-[44px]' />
                <UserEditProfile/>
            </div>
        </>
    )
}

export default EditProfile