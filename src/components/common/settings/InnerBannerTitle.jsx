import React from 'react'
import CustomBtn from '../../ui/CustomBtn'
import { ArrowLeftIcon } from '../../ui/Icons'
import Text from '../../ui/Text'
import useGoBack from '../../../hooks/useGoBack'
import { useNavigate } from 'react-router'

const InnerBannerTitle = ({wrapperClass='',arrowBtnClass='',smTitle,lgTitle,lgTitleClass=''}) => {
  const goBack = useGoBack();
  const navigate = useNavigate();

  const GoEditRoute = ()=> {
    navigate('/settings/edit');
  }
  return (
    <>
    <div className={`${wrapperClass}`}>
      <CustomBtn onClick={goBack} buttonClass={`${arrowBtnClass} inline-flex bg-transparent text-(--text-black) hover:bg-transparent cursor-pointer`} icon={<ArrowLeftIcon/>}/>
      {smTitle && <Text as='h6' className='font-inter font-bold text-2xl text-(--text-black) capitalize tracking-[-0.04px]'>{smTitle}</Text>}
      {lgTitle && <Text as='h4' className={`font-inter font-bold text-4xl text-(--text-black-10) capitalize tracking-[-0.01px] ${lgTitleClass}`}>{lgTitle}</Text>}
      {smTitle && <CustomBtn buttonClass='btn-primary h-[52px] font-inter text-base font-semibold min-w-[166px] ml-auto' onClick={GoEditRoute}  label='edit'/>}
    </div>
    </>
  )
}

export default InnerBannerTitle