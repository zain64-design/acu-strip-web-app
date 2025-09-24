import { useState } from "react";
import Text from '../components/ui/Text'
import SearchBar from '../components/ui/SearchBar'
import CustomTable from '../components/ui/CustomTable'
import { TableCell, TableRow } from 'flowbite-react'
import { useGetAllVehiclesQuery } from '../redux/slice/apiSlices/vehiclesApiSlice'
import Paginations from '../components/ui/Paginations'

const VehicleManagement = () => {
    const [page, setPage] = useState(1);
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
      <div className="card py-[25px] mb-10">
      <Text className="card-heading px-[24px]">Vehicle Management</Text>
      <SearchBar formClass='flex items-center flex-wrap md:flex-nowrap w-full gap-[17px] mt-5 mb-[59px] px-[24px]' searchClass="flex w-full md:w-[calc(100%-218px)]" placeholder='Search vehicle' name='search' btnLabel='search' />
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

export default VehicleManagement