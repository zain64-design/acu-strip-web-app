import React from 'react'
import UserProfile from './UserProfile'
import CustomInput from '../../ui/CustomInput'
import CustomBtn from '../../ui/CustomBtn'

const UserEditProfile = () => {
    return (
        <>
            <form action="">
                <UserProfile />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[20px] w-full lg:w-[calc(100%-128px)] mx-auto sm:mt-[110px]">
                    <CustomInput
                        label="name"
                        type="text"
                        name="name"
                        placeholder="enter admin name"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='name'
                        required
                    />
                    <CustomInput
                        label="email address"
                        type="text"
                        name="address"
                        placeholder="enter address"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='address'
                        required
                    />
                    <CustomInput    
                        label="phone number"
                        type="number"
                        name="number"
                        placeholder="enter phone number"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='number'
                        required
                    />
                </div>
                <CustomBtn buttonClass='btn-primary font-urbanist text-xl md:text-[28px] font-bold mt-[40px] md:mt-[98px] w-full h-[60px] md:h-[71px]' label='save changes' />
            </form>
        </>
    )
}

export default UserEditProfile