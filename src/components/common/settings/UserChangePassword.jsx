import React from 'react'
import CustomInput from '../../ui/CustomInput'
import CustomBtn from '../../ui/CustomBtn'
import usePasswordToggle from '../../../hooks/usePasswordToggle'
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const UserChangePassword = () => {
        const { isPasswordVisible, passwordToggle } = usePasswordToggle()
    return (
        <>
            <form action="">
                <div className="grid grid-cols-1 gap-y-[16px] w-full lg:w-[calc(100%-166px)] mx-auto mt-[110px]">
                    <CustomInput
                        label="current password"
                        type={isPasswordVisible['password1'] ? 'text' : 'password'}
                        name="passwordCurrent"
                        placeholder="type current password"
                        wrapperClassName='relative'
                        labelClassName="font-urbanist font-bold text-base text-(--text-black) mb-[16px] capitalize"
                        inputClassName="h-[62px] w-full p-[10px_40px_10px_10px] sm:p-[17px_40px_17px_24px] bg-(--bg-grey-50) rounded-lg text-sm sm:text-lg text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-100) placeholder:capitalize placeholder:font-urbanist pass-type-font placeholder:text-sm sm:placeholder:text-lg"
                        required
                        autoComplete="current-password"
                        iconToggler={
                            <CustomBtn
                                type="button"
                                buttonClass="absolute bottom-[18px] right-0 inline-block text-(--text-gray-100) bg-transparent border-none text-2xl focus:outline-none focus:shadow-none focus:ring-0 pr-[10px] sm:pr-[15px] hover:bg-transparent cursor-pointer"
                                onClick={() => passwordToggle('password1')}
                                icon={isPasswordVisible['password1'] ? <PiEyeLight /> : <PiEyeSlash />}
                            />

                        }
                    />
                    <CustomInput
                        label="new password"
                        type={isPasswordVisible['password2'] ? 'text' : 'password'}
                        name="passwordNew"
                        placeholder="type new password"
                        wrapperClassName='relative'
                        labelClassName="font-urbanist font-bold text-base text-(--text-black) mb-[16px] capitalize"
                        inputClassName="h-[62px] w-full p-[10px_40px_10px_10px] sm:p-[17px_40px_17px_24px] bg-(--bg-grey-50) rounded-lg text-sm sm:text-lg text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-100) placeholder:capitalize placeholder:font-urbanist pass-type-font placeholder:text-sm sm:placeholder:text-lg"
                        required
                        autoComplete="new-password"
                        iconToggler={
                            <CustomBtn
                                type="button"
                                buttonClass="absolute bottom-[18px] right-0 inline-block text-(--text-gray-100) bg-transparent border-none text-2xl focus:outline-none focus:shadow-none focus:ring-0 pr-[10px] sm:pr-[15px] hover:bg-transparent cursor-pointer"
                                onClick={() => passwordToggle('password2')}
                                icon={isPasswordVisible['password2'] ? <PiEyeLight /> : <PiEyeSlash />}
                            />

                        }
                    />
                    <CustomInput
                        label="confirm password"
                        type={isPasswordVisible['password3'] ? 'text' : 'password'}
                        name="passwordConfirm"
                        placeholder="type confirm password"
                        wrapperClassName='relative'
                        labelClassName="font-urbanist font-bold text-base text-(--text-black) mb-[16px] capitalize"
                        inputClassName="h-[62px] w-full p-[10px_40px_10px_10px] sm:p-[17px_40px_17px_24px] bg-(--bg-grey-50) rounded-lg text-sm sm:text-lg text-(--text-black) focus:outline-none focus:shadow-none border-none placeholder:text-(--text-gray-100) placeholder:capitalize placeholder:font-urbanist pass-type-font placeholder:text-sm sm:placeholder:text-lg"
                        required
                        autoComplete="new-password"
                        iconToggler={
                            <CustomBtn
                                type="button"
                                buttonClass="absolute bottom-[18px] right-0 inline-block text-(--text-gray-100) bg-transparent border-none text-2xl focus:outline-none focus:shadow-none focus:ring-0 pr-[10px] sm:pr-[15px] hover:bg-transparent cursor-pointer"
                                onClick={() => passwordToggle('password3')}
                                icon={isPasswordVisible['password3'] ? <PiEyeLight /> : <PiEyeSlash />}
                            />

                        }
                    />
                </div>
                <CustomBtn buttonClass='btn-primary font-urbanist text-xl md:text-[28px] font-bold mt-[40px] md:mt-[178px] w-full h-[60px] md:h-[71px]' label='save changes' />
            </form>
        </>
    )
}

export default UserChangePassword