import React from 'react'
import { useGetAllDailyStatsQuery} from '../../redux/slice/apiSlices/statsApiSlice';
import Image from '../ui/Image';
import Text from '../ui/Text';

const StatsBox = () => {

    const { data, isLoading, error } = useGetAllDailyStatsQuery('');

    return (
        <>
            {data?.map((value,index) => {
                const isLast = index === data.length - 1;
                const isOdd = data.length % 2 !== 0;
                const {id, title, total, icon} = value;
                return (
                    <div className={`bg-(--bg-white) rounded-lg p-[28px] ${isLast && isOdd ? "sm:col-span-full md:col-span-1" : ""}`} key={id}>
                    <div className="flex flex-row items-center gap-4 mb-[35px]">
                        <Image src={icon} alt='stats-icon' className='max-h-[32px] max-w-full object-contain object-center' />
                        <Text as='h6' className='font-urbanist font-semibold text-base capitalize text-(--text-black-10)'>{title}</Text>
                    </div>
                    <Text as='h5' className='font-urbanist font-extrabold text-2xl sm:text-[32px] text-(--text-black-10)'>{total}</Text>
                </div>
                )
            })}
        </>
    )
}

export default StatsBox