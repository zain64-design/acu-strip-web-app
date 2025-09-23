import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'


const CustomTable = ({tbHeader=[],tbClass='',data=[],isLoading=false,error=false,renderRow}) => {
  return (
    <>
<div className={`overflow-x-auto ${tbClass}`}>
      <Table className='ct-table table-borderless align-middle'>
        <TableHead className='border-b border-(--border-gray-100)'>
          <TableRow>
            {tbHeader?.map((header, index) => (
              <TableHeadCell className='px-5 bg-(--bg-white) font-inter font-bold text-[14.98px] text-(--text-black-50) capitalize' key={index} colSpan={header.colspan && header.colspan }>{header.text}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {error ? (
            <TableRow>
              <TableCell colSpan={tbHeader.length} className="text-danger text-center">
                Error: {error}
              </TableCell>
            </TableRow>
          ) : isLoading ? (
            <TableRow>
              <td colSpan={tbHeader.length} className="text-center">
                Loading...
              </td>
            </TableRow>
          ) : (
            data?.map((value) => renderRow(value))
          )}
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default CustomTable