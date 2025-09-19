import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'

const WebLayout = () => {
  return (
    <>
    <Header/>
    <main className='relative overflow-hidden h-[100%]'>
        <SideBar/>
        <section className="relative overflow-hidden pt-[120px] ml-auto w-[calc(100%-58px)] xl:w-[calc(100%-312px)]">
            <Outlet/>
        </section>
    </main>
    </>
  )
}

export default WebLayout