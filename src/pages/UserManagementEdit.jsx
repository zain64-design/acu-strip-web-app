import React from 'react'
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import UserEditManagementForm from '../components/common/settings/UserEditManagementForm'
const UserManagementEdit = () => {
    return (
        <>
            <div className="card p-[20px_15px] md:p-[56px_34px_24px] mb-10">
                <InnerBannerTitle lgTitle='Edit User' lgTitleClass='mx-auto text-center' arrowBtnClass='xs:absolute top-0 left-auto' wrapperClass='relative mb-[44px] flex items-start xs:block' />
                <UserEditManagementForm/>
            </div>
        </>
    )
}

export default UserManagementEdit