import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import useDrawerToggle from '../../../hooks/useDrawerToggle'

const WebLayout = () => {
  const { isOpen: isMenuOpen, openDrawer: openMenuDrawer, closeDrawer: closeMenuDrawer } = useDrawerToggle();
  return (
    <>
      <Header isMenuOpen={isMenuOpen} openMenuDrawer={openMenuDrawer} closeMenuDrawer={closeMenuDrawer}  />
      <main className='relative overflow-hidden h-[100%]'>
        <SideBar isMenuOpen={isMenuOpen} closeMenuDrawer={closeMenuDrawer} />
        <section className="relative overflow-hidden p-[120px_24px_24px] ml-auto w-full xl:w-[calc(100%-312px)]">
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default WebLayout