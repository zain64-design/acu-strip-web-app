import React from 'react'
import CustomBtn from '../../ui/CustomBtn'
import { ArrowLeftIcon } from '../../ui/Icons'
import Text from '../../ui/Text'
import useGoBack from '../../../hooks/useGoBack'
import { useNavigate } from 'react-router'
import { twMerge } from 'tailwind-merge'

const   InnerBannerTitle = ({
  wrapperClass = '',
  arrowBtnClass = '',
  smTitle,
  lgTitle,
  smTitleClass = '',
  lgTitleClass = '',
  isEdit = false,
  isSave = false,
}) => {
  const goBack = useGoBack()
  const navigate = useNavigate()

  const GoEditRoute = () => {
    navigate('/settings/edit')
  }

  return (
    <div className={twMerge(wrapperClass)}>
      <CustomBtn
        onClick={goBack}
        buttonClass={twMerge(
          'inline-flex bg-transparent text-(--text-black) hover:bg-transparent cursor-pointer',
          arrowBtnClass
        )}
        icon={<ArrowLeftIcon />}
      />

      {smTitle && (
        <Text
          as="h6"
          className={twMerge(
            'font-inter font-bold text-xl sm:text-2xl text-(--text-black) capitalize tracking-[-0.04px]',
            smTitleClass
          )}
        >
          {smTitle}
        </Text>
      )}

      {lgTitle && (
        <Text
          as="h4"
          className={twMerge(
            'font-inter font-bold text-xl sm:text-4xl text-(--text-black-10) capitalize tracking-[-0.01px]',
            lgTitleClass
          )}
        >
          {lgTitle}
        </Text>
      )}

      {isEdit && (
        <CustomBtn
          buttonClass="btn-primary h-[52px] font-inter text-base font-semibold min-w-full xs:min-w-[166px] ml-auto"
          onClick={GoEditRoute}
          label="edit"
        />
      )}
      {isSave && (
        <CustomBtn
          buttonClass="btn-primary h-[52px] font-inter text-base font-semibold min-w-full xs:min-w-[181px] ml-auto"
          onClick={goBack}
          label="save changes"
        />
      )}
    </div>
  )
}

export default InnerBannerTitle
