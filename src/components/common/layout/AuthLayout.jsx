import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <>
            <main className='relative overflow-hidden h-[100%]'>
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout