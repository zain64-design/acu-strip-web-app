import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import CustomInput from './CustomInput'
import CustomBtn from './CustomBtn'

const SearchBar = ({formClass='',searchClass='',placeholder='',name='',btnLabel=''}) => {
  return (
    <>
    <form className={formClass}>
        <div className={`relative flex items-center gap-x-[16px] !bg-(--bg-secondary-2) rounded-md py-[15px] px-[18px] ${searchClass}`}>
            <CustomBtn buttonClass="bg-transparent dark:bg-transparent rounded-full p-0 cursor-pointer transition-all ease-in-out duration-300 hover:!bg-transparent hover:text-(--text-black) focus:ring-transparent dark:focus:ring-transparent group" icon={<IoIosSearch className='text-(--text-gray-200) text-xl transition-all ease-in-out duration-300 group-hover:text-(--text-primary)' />}/>
            <CustomInput name={name} inputClassName="w-full font-nunito text-base text-(--text-gray-200) placeholder:font-nunito placeholder:text-base placeholder:text-(--text-gray-200) focus-visible:outline-0" placeholder={placeholder}/>
        </div>
        <CustomBtn label={btnLabel} buttonClass='btn-primary h-[52px] w-full md:w-[218px] font-urbanist font-semibold text-base rounded-[10px] capitalize'/>
    </form>
    </>
  )
}

export default SearchBar