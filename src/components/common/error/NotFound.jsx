import React from 'react'
import { MdError } from "react-icons/md";
import ErrorDesc from './ErrorDesc';

const NotFound = () => {
    return (
        <>
            <ErrorDesc heading="404 - Page Not Found" para="The requested page does not exist" icon={<MdError className='text-(--text-primary) text-2xl md:text-6xl mx-auto' />} />
        </>
    )
}

export default NotFound