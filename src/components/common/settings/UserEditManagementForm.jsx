import React, { useState } from 'react'
import CustomInput from '../../ui/CustomInput'
import CustomBtn from '../../ui/CustomBtn'
import { useNavigate } from 'react-router'
import CustomSelect from '../../ui/CustomSelect'

const UserEditManagementForm = () => {

    const navigate = useNavigate();

    const goToUserManage = () => {
        navigate('/user-management')
    }

        const [selectedValue, setSelectedValue] = useState("activate");
    
        const selectedOption = [
            { value: "activate", label: "activate" },
            { value: "deactivate", label: "deactivate" },
        ];

    return (
        <>
            <form action="">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[20px] w-full lg:w-[calc(100%-128px)] mx-auto sm:mt-[110px]">
                    <CustomInput
                        label="user name"
                        type="text"
                        name="userName"
                        placeholder="enter user name"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='user name'
                        required
                    />
                    <CustomInput
                        label="address"
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
                        label="contact number"
                        type="number"
                        name="contactNumber"
                        placeholder="enter contact number"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='number'
                        allowNegative={false}
                        required
                    />
                    <CustomInput
                        label="company name"
                        type="text"
                        name="companyName"
                        placeholder="enter company name"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='company name'
                        required
                    />
                    <CustomInput
                        label="email"
                        type="text"
                        name="email"
                        placeholder="enter email address"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[67px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='email'
                        required
                    />
                    <CustomSelect
                        label="status"
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        wrapperClassName="h-[67px] p-[19px_17px] bg(--bg-grey-50) rounded-md"
                        valueClassName="font-nunito text-sm text-(--text-grey-200) capitalize"
                        itemClassName="bg-(--bg-white) hover:!bg-(--bg-secondary) hover:!text-(--text-primary)"
                        activeItemClassName="bg-(--bg-secondary) text-(--text-primary)"
                        selectedOption={selectedOption}
                        selectedValue={selectedValue}
                        onValueChange={(value) => setSelectedValue(value)}
                        placeholder="Select Option" />
                </div>
                <CustomBtn onClick={goToUserManage} buttonClass='btn-primary font-urbanist text-xl md:text-[28px] font-bold mt-[40px] md:mt-[110px] w-full h-[60px] md:h-[71px]' label='save changes' />
            </form>
        </>
    )
}

export default UserEditManagementForm