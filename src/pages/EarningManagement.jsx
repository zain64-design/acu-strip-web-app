import { useState } from "react";
import Text from '../components/ui/Text'
import SearchBar from '../components/ui/SearchBar'
import CustomTable from '../components/ui/CustomTable'
import { TableCell, TableRow } from 'flowbite-react'
import { useGetAllEarningsQuery } from '../redux/slice/apiSlices/earningsApiSlice'
import Paginations from "../components/ui/Paginations";

const EarningManagement = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetAllEarningsQuery('');

  const tbHeader = [{ text: 'Company Name' }, { text: 'Subscription Plan' }, { text: 'Plan Start Date' }, { text: 'Plan End Date' }, { text: 'Total Earnings to Date' }];

  const renderRow = (value) => {
    const { id, companyName, subscriptionPlan, startDate, endDate, earningDate } = value;
    

    return (
      <TableRow key={id} className='font-inter font-medium text-base text-(--text-black-50)'>
        <TableCell className='first:pl-[28px] last:pr-[28px] py-[23px] px-5'>{companyName}</TableCell>
        <TableCell className='py-[23px] px-5 leading-[24px]'>{subscriptionPlan}</TableCell>
        <TableCell className='py-[23px] px-5'>{startDate}</TableCell>
        <TableCell className='py-[23px] px-5'>{endDate}</TableCell>
        <TableCell className='py-[23px] px-5'>{earningDate}</TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <div className="card py-[25px] mb-10">
      <Text className="card-heading px-[24px]">Earnings Management</Text>
      <SearchBar formClass='flex items-center flex-wrap md:flex-nowrap w-full gap-[17px] mt-5 mb-[59px] px-[24px]' searchClass="flex w-full md:w-[calc(100%-218px)]" placeholder='Search earnings' name='search' btnLabel='search' />
      <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbWrapperClass='mt-4' />
            <Paginations
                    totalPages={6}
                    currentPage={page}
                    onPageChange={setPage}
                    className="mt-[108px] sm:justify-end px-[27px]"
                  />
    </div>
    </>
  )
}

export default EarningManagement