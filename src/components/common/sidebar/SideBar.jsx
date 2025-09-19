import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import Links from "./Links";
import SideBarLogo from "./SideBarLogo";

const SideBar = () => {
  return (
    <Sidebar aria-label="sidebar">
        <SideBarLogo/>
      <SidebarItems className="mt-10 md:mt-[110px]">
        <SidebarItemGroup>
          <Links/>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default SideBar