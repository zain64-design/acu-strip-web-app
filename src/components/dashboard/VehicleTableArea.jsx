import React from 'react'
import { TableCell, TableRow } from 'flowbite-react'
import CustomTable from '../ui/CustomTable';
import Text from '../ui/Text';
import { Link } from 'react-router';
import { useGetAllVehiclesQuery } from '../../redux/slice/apiSlices/vehiclesApiSlice';

const VehicleTableArea = () => {
    const { data, isLoading, error } = useGetAllVehiclesQuery('');
  const tbHeader = [{ text: 'Owner Name' }, { text: 'Vehicle Model' }, { text: 'Vehicle Make' }, { text: 'VIN No' }, { text: 'Year' }, { text: 'Current Mileage' }, { text: 'Last Test' }];

  const renderRow = (value) => {
    const { id, ownerName, vehicleModel, vehicleMake, vinNo, year, currentMileage,lastTest } = value;
    

    return (
      <TableRow key={id} className='font-inter font-medium text-base text-(--text-black-50)'>
        <TableCell className='first:pl-[28px] last:pr-[28px] py-[23px] px-5'>{ownerName}</TableCell>
        <TableCell className='py-[23px] px-5 leading-[24px]'>{vehicleModel}</TableCell>
        <TableCell className='py-[23px] px-5'>{vehicleMake}</TableCell>
        <TableCell className='py-[23px] px-5'>{vinNo}</TableCell>
        <TableCell className='py-[23px] px-5'>{year}</TableCell>
        <TableCell className='py-[23px] px-5'>{currentMileage}</TableCell>
        <TableCell className='py-[23px] px-5'>{lastTest}</TableCell>
      </TableRow>
    )
  }
    return (
        <>
            <div className="mt-[48px]">
                <div className="flex items-center justify-between">
                    <Text className="font-urbanist font-bold text-lg sm:text-[22px] text-(--text-black-10) leading-normal capitalize">Vehicle Management</Text>
                    <Link to="/vehicle-management" className='font-inter font-semibold text-lg text-(--text-primary) capitalize'>view all</Link>
                </div>
                <CustomTable tbHeader={tbHeader} data={data?.slice(0, 4)} isLoading={isLoading} error={error} renderRow={renderRow} tbWrapperClass='mt-[31px]' tbClass='bg-transparent' tbHeadCellClass='bg-transparent' />
            </div>
        </>
    )
}

export default VehicleTableArea