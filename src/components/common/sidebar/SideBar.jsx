import { Drawer, Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { IoCloseOutline } from "react-icons/io5";
import Links from "./Links";
import SideBarLogo from "./SideBarLogo";
import CustomBtn from "../../ui/CustomBtn";
import Text from "../../ui/Text";
import UserWelcome from "../header/UserWelcome";

const SideBar = ({ isMenuOpen, closeMenuDrawer }) => {
  return (
    <>
      <Sidebar aria-label="sidebar" className="hidden xl:block">
        <SideBarLogo className="h-[50px] md:h-[96px]" />
        <SidebarItems className="mt-10 md:mt-[110px]">
          <SidebarItemGroup>
            <Links />
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
      <Drawer open={isMenuOpen} onClose={closeMenuDrawer} position='left' className='z-[110]'>
        <div className="flex flex-row justify-between mb-4">
          <SideBarLogo className="h-[50px]" />
          <CustomBtn onClick={closeMenuDrawer} buttonClass=" bg-transparent dark:bg-transparent text-2xl text-(--text-primary) cursor-pointer block xl:hidden hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent" icon={<IoCloseOutline />} />
        </div>
        <UserWelcome wrapperClass='mb-4'/>
        <Text as='ul'>
          <Links />
        </Text>
      </Drawer>
    </>
  )
}

export default SideBar