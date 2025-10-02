import React from 'react'
import { useGetAllUserDataQuery } from '../../redux/slice/apiSlices/apiSlice';
import { TableCell, TableRow, Dropdown, DropdownItem } from 'flowbite-react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import CustomTable from '../ui/CustomTable';
import Text from '../ui/Text';
import { Link } from 'react-router';

const UserTableArea = () => {
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
            <DropdownItem className="font-inter font-medium text-base text-(--text-primary) capitalize  hover:!bg-(--bg-success) transition-all duration-200 ease-in-out">edit</DropdownItem>
            <DropdownItem className="font-inter font-medium text-base text-(--text-red) capitalize hover:!bg-(--bg-warning) transition-all duration-200 ease-in-out">delete</DropdownItem>
                    </Dropdown>
                </TableCell>
            </TableRow>
        )
    }
    return (
        <>
            <div className="mt-[48px]">
                <div className="flex items-center justify-between">
                    <Text className="font-inter font-bold text-lg sm:text-[22px] text-(--text-black-10) leading-normal capitalize">User Management</Text>
                    <Link to="/user-management" className='font-inter font-semibold text-lg text-(--text-primary) capitalize'>view all</Link>
                </div>
                <CustomTable tbHeader={tbHeader} data={data?.slice(0, 4)} isLoading={isLoading} error={error} renderRow={renderRow} tbWrapperClass='mt-[31px]' tbClass='bg-transparent' tbHeadCellClass='bg-transparent' />
            </div>
        </>
    )
}

export default UserTableArea