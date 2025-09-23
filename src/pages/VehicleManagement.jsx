import React from 'react'
import Text from '../components/ui/Text'
import SearchBar from '../components/ui/SearchBar'
import CustomTable from '../components/ui/CustomTable'
import { TableCell, TableRow } from 'flowbite-react'
import { useGetUserManagementDataQuery } from '../redux/slice/apiSlices/apiSlice'

const VehicleManagement = () => {
  const { data, isLoading, error } = useGetUserManagementDataQuery('');

  const tbHeader = [{ text: 'User Name' }, { text: 'Address' }, { text: 'Contact Number' }, { text: 'Company Name' }, { text: 'Email' }, { text: 'Status' }];

  const renderRow = (value) => {
    const { id, user, address, number, company, email, status } = value;
    

    return (
      <TableRow key={id} className='font-inter font-medium text-base text-(--text-black-50)'>
        <TableCell className='first:pl-[28px] last:pr-[28px] py-[23px] px-5'>{user}</TableCell>
        <TableCell className='py-[23px] px-5 leading-[24px]'>{address}</TableCell>
        <TableCell className='py-[23px] px-5'>{number}</TableCell>
        <TableCell className='py-[23px] px-5'>{company}</TableCell>
        <TableCell className='py-[23px] px-5'>{email}</TableCell>
        <TableCell className='py-[23px] px-5'><span className={`badge ${status === 'activate' ? 'bg-(--bg-success) text-(--text-primary)':'bg-(--bg-warning) text-(--text-red)'}`}>{status}</span></TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <div className="card py-[25px]">
      <Text className="card-heading px-[24px]">Vehicle Management</Text>
      <SearchBar formClass='flex items-center flex-wrap md:flex-nowrap w-full gap-[17px] mt-5 px-[24px]' searchClass="flex w-full md:w-[calc(100%-218px)]" placeholder='Search user' name='search' btnLabel='search' />
      <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbClass='security-table mt-4' />
    </div>
    </>
  )
}

export default VehicleManagement