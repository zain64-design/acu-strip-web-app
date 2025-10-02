import React from 'react'
import Image from '../../ui/Image'
import Text from '../../ui/Text'

const NotificationArea = () => {

    const infoData = [
        {
            id: 1,
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac',
            userProfile: '/images/user-notify.jpg',
            userName: 'alex bale',
            date: '06 Sep',
            itemImg: '/images/item1.png'
        },
        {
            id: 2,
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac',
            userProfile: '/images/user-notify.jpg',
            userName: 'alex bale',
            date: '06 Sep',
            itemImg: '/images/item2.png'
        },
        {
            id: 3,
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac',
            userProfile: '/images/user-notify.jpg',
            userName: 'alex bale',
            date: '06 Sep',
            itemImg: '/images/item3.png'
        },
        {
            id: 4,
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac',
            userProfile: '/images/user-notify.jpg',
            userName: 'alex bale',
            date: '06 Sep',
            itemImg: '/images/item4.jpg'
        },
    ]

    return (
        <>
            <Text as='ul' className='[&>li:not(:last-child)]:mb-[27px]'>
                {infoData?.map(({ id, info, userProfile, userName, itemImg, date }) => (
                    <Text key={id} as='li' className='flex items-start justify-between gap-2 flex-wrap flex-col-reverse md:flex-row'>
                        <div className="flex flex-col-reverse md:flex-col items-start gap-2 font-inter font-normal w-full md:w-[calc(100%-199px)]">
                            <Text as='span' className='text-lg text-(--text-black-200) leading-[28px]'>{info}</Text>
                            <Text className='text-base text-(--text-gray-100) leading-[21px] capitalize inline-flex items-center gap-[7px]'>
                                <Image src={userProfile} alt='item-img' className='rounded-full h-[15px] w-[15px] object-cover object-center' />
                                {userName} {date}
                            </Text>
                        </div>
                        <Image src={itemImg} className='rounded-lg object-cover object-center h-[63px] w-[63px]' alt='item-img' />
                    </Text>
                ))}
            </Text>
        </>
    )
}

export default NotificationArea