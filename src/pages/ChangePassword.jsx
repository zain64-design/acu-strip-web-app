import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import UserChangePassword from '../components/common/settings/UserChangePassword';

const EditProfile = () => {
    return (
        <>
            <div className="card p-[20px_15px] md:p-[56px_34px_24px] mb-10">
                <InnerBannerTitle lgTitle='change password' lgTitleClass='mx-auto text-center' arrowBtnClass='xs:absolute top-0 left-auto' wrapperClass='relative lg:pl-[23px] mb-[44px] flex items-start xs:block' />
                <UserChangePassword/>
            </div>
        </>
    )
}

export default EditProfile