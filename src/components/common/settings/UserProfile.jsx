import { useRef } from 'react'
import Image from '../../ui/Image'
import Text from '../../ui/Text'
import CustomBtn from '../../ui/CustomBtn'
import UserImg from '/images/user-profile.png'
import { EditIcon } from '../../ui/Icons'

const UserProfile = () => {

        const fileInputRef = useRef(null);

    const handFileClick = () => {
        fileInputRef.current.click();
    }

    return (
        <>
            <div className="flex flex-col justify-center text-center text-(--text-black)">
                <picture className='block mx-auto relative mb-[19.50px]'>
                    <Image src={UserImg} className='img-fluid h-[110px] w-[110px] rounded-full object-cover object-center' alt="User Profile" />
                    <CustomBtn buttonClass="bg-(--btn-bg-primary) text-(--btn-text-white) capitalize rounded-full border-4 border-(--border-white) transition duration-500 ease-in-out cursor-pointer hover:bg-(--btn-bg-hover) hover:text-(--btn-text-green) p-2 h-[43px] w-[43px] absolute top-0 right-[-20px]" onClick={handFileClick} icon={<EditIcon/>}/>
                    <input type="file" className='hidden' ref={fileInputRef}/>
                </picture>
                <Text as='h6' className='font-inter font-bold text-2xl capitalize'>Daniel Jake</Text>
                <Text as='p' className='font-inter font-normal text-lg mt-[8px]'>Email@example.com</Text>
            </div>
        </>
    )
}

export default UserProfile