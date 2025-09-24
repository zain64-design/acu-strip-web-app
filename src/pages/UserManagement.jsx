import { useState } from "react";
import Text from '../components/ui/Text'
import SearchBar from '../components/ui/SearchBar'
import CustomTable from '../components/ui/CustomTable'
import { TableCell, TableRow, Dropdown, DropdownItem } from 'flowbite-react'
import { useGetAllUserDataQuery } from '../redux/slice/apiSlices/apiSlice'
import Paginations from '../components/ui/Paginations'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router";
import CustomBtn from "../components/ui/CustomBtn";

const UserManagement = () => {

  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetAllUserDataQuery('');

  const tbHeader = [{ text: 'User Name' }, { text: 'Address' }, { text: 'Contact Number' }, { text: 'Company Name' }, { text: 'Email' }, { text: 'Status' }, { text: 'Action' }];

  const renderRow = (value) => {
    const { id, user, address, number, company, email, status } = value;


    return (
      <TableRow key={id} className='font-inter font-medium text-base text-(--text-black-50)'>
        <TableCell className='first:pl-[28px] last:pr-[28px] py-[23px] px-5'>{user}</TableCell>
        <TableCell className='py-[23px] px-5 leading-[24px]'>{address}</TableCell>
        <TableCell className='py-[23px] px-5'>{number}</TableCell>
        <TableCell className='py-[23px] px-5'>{company}</TableCell>
        <TableCell className='py-[23px] px-5'>{email}</TableCell>
        <TableCell className='py-[23px] px-5'><span className={`badge ${status === 'activate' ? 'bg-(--bg-success) text-(--text-primary)' : 'bg-(--bg-warning) text-(--text-red)'}`}>{status}</span></TableCell>
        <TableCell>
          <Dropdown
          className="rounded-md"
          renderTrigger={() => (
            <BiDotsVerticalRounded className="text-2xl text-(--text-black-100)" />
        )}>
            <DropdownItem className="font-inter font-medium text-base text-(--text-primary) capitalize hover:!bg-(--bg-secondary-2)">edit</DropdownItem>
            <DropdownItem className="font-inter font-medium text-base text-(--text-primary) capitalize hover:!bg-(--bg-secondary-2)">delete</DropdownItem>
          </Dropdown>
          </TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <div className="card py-[25px] mb-10">
        <Text className="card-heading px-[24px]">User Management</Text>
        <SearchBar formClass='flex items-center flex-wrap md:flex-nowrap w-full gap-[17px] mt-5 mb-[59px] px-[24px]' searchClass="flex w-full md:w-[calc(100%-218px)]" placeholder='Search user' name='search' btnLabel='search' />
        <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbClass='mt-4' />
        <Paginations
        totalPages={6}
        currentPage={page}
        onPageChange={setPage}
        className="mt-[108px] justify-end px-[27px]"
      />
      </div>
    </>
  )
}

export default UserManagement