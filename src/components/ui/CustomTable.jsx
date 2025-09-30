import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import Text from './Text'
import { twMerge } from 'tailwind-merge'


const CustomTable = ({ tbHeader = [], tbClass='', tbHeadClass='', tbHeadCellClass='' , tbWrapperClass = '', data = [], isLoading = false, error = false, renderRow }) => {
  return (
    <>
      <div className={twMerge('overflow-x-auto', tbWrapperClass)}>
        <Table className={twMerge('align-middle', tbClass)}>
          <TableHead className={twMerge('border-b border-(--border-gray-100)', tbHeadClass)}>
            <TableRow>
              {tbHeader?.map((header, index) => (
                <TableHeadCell className={twMerge('px-5 bg-(--bg-white) font-inter font-bold text-[14.98px] text-(--text-black-50) capitalize',tbHeadCellClass)} key={index} colSpan={header.colspan && header.colspan}>{header.text}</TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <TableRow>
                <TableCell colSpan={tbHeader.length} className="text-center">
                  <Text as='span' className="badge bg-(--bg-warning) text-(--text-red)">Error: {error?.message}</Text>
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