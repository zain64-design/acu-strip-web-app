import React from 'react'
import Text from '../../ui/Text';
// import CustomBtn from '../../UI/CustomBtn';
// import useGoBack from '../../../utils/hooks/useGoBack'

const ErrorDesc = ({ heading, para, icon }) => {
    // const goBack = useGoBack();
    return (
        <>
            <section className="min-h-[100vh] flex items-center justify-center flex-col bg-(--bg-white) text-(--text-black) py-5">
                <div className="container mx-auto px-4 text-center font-satoshi-reg">
                    {icon}
                    <Text as='h2' className='text-2xl leading-[24px] sm:text-[34px] sm:leading-[34px] md:text-[44px] md:leading-[44px] lg:text-[44px] lg:leading-[44px] xl:text-[54px] xl:leading-[54px] 2xl:text-[64px] 2xl:leading-[64px] font-integral my-4'>{heading}</Text>
                    <Text as='p' className='text-sm leading-[20px] md:text-base md:leading-[22px] my-4'>{para}</Text>
                    {/* <CustomBtn onClick={goBack} buttonClass="btn-dark h-[45px] min-w-[180px] mx-auto mt-10 focus:!ring-transparent" label="go back" /> */}
                </div>
            </section>
        </>
    )
}

export default ErrorDesc