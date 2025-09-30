import React from 'react'
import { useGetAllStatsQuery } from '../../redux/slice/apiSlices/statsApiSlice';
import Image from '../ui/Image';
import Text from '../ui/Text';

const StatsBox = () => {

    const { data, isLoading, error } = useGetAllStatsQuery('');

    return (
        <>
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
                {data?.map(({ id, title, total, icon }) => (
                    <div className="bg-(--bg-white) rounded-lg p-[28px]" key={id}>
                        <div className="flex flex-row gap-4 mb-[35px]">
                            <Image src={icon} alt='stats-icon' className='max-h-[32px] max-w-full object-contain object-center'/>
                            <Text as='h6' className='font-urbanist font-semibold text-base capitalize text-(--text-black-10)'>{title}</Text>
                        </div>
                        <Text as='h5' className='font-urbanist font-extrabold text-2xl sm:text-[32px] text-(--text-black-10)'>{total}</Text>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatsBox