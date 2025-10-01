import React from 'react'
import CustomInput from '../../ui/CustomInput'
import CustomBtn from '../../ui/CustomBtn'
import Text from '../../ui/Text'
import { ArrowLeftIcon } from '../../ui/Icons'
import useGoBack from '../../../hooks/useGoBack'

const ForgotForm = () => {

    const goBack = useGoBack()

    return (
        <>
            <div className="card max-w-3xl mx-auto px-8 md:px-12 py-8 md:py-14">
                <div className="flex mb-6">
                    <CustomBtn
                        onClick={goBack}
                        buttonClass='inline-flex bg-transparent text-(--text-black) hover:bg-transparent cursor-pointer'
                        icon={<ArrowLeftIcon />}
                    />
                    <Text as='h4' className='font-inter font-bold text-2xl md:text-4xl text-(--text-black-10) capitalize tracking-[-0.01px] mx-auto text-center'>Forgot Password?</Text>
                </div>
                <Text as='p' className='font-inter font-normal text-md sm:text-lg text-(--text-black-200) text-center'>Please enter the email you use to sign in and we will send you resent link.</Text>
                <form action="" className='mt-8'>
                    <CustomInput
                        label="email address"
                        type="text"
                        name="address"
                        placeholder="enter email address"
                        wrapperClassName=''
                        labelClassName="font-nunito font-semibold text-sm text-(--text-gray-400) mb-[14px] capitalize"
                        inputClassName="h-[60px] w-full p-[19px_17px] bg-(--bg-grey-50) rounded-md font-nunito text-sm text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-200) placeholder:capitalize"
                        autoComplete='address'
                        required
                    />
                    <CustomBtn buttonClass='btn-primary font-urbanist text-xl font-semibold mt-4 w-full h-[55px]' label='submit' />
                </form>
            </div>
        </>
    )
}

export default ForgotForm