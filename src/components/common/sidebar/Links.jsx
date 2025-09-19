import { NavLink } from "react-router";
import { SidebarItem } from "flowbite-react";
import { UserIcon, DashboardIcon,EarningIcon, SettingIcon, LogOutIcon } from "./SideIcons";
import { useLocation } from "react-router";

const Links = () => {

    const routes = [
        {
            id: 1,
            path: '/dashboard',
            title: 'dashboard',
            icon: DashboardIcon
        },
        {
            id: 2,
            path: '/user-management',
            title: 'user management',
            icon: UserIcon
        },
        {
            id: 3,
            path: '/vehicle-management',
            title: 'vehicle management',
            icon: UserIcon
        },
        {
            id: 4,
            path: '/earnings-management',
            title: 'earnings management',
            icon: EarningIcon
        },
        {
            id: 5,
            path: '/settings',
            title: 'settings',
            icon: SettingIcon
        },
        {
            id: 6,
            path: '/',
            title: 'logout',
            icon: LogOutIcon
        }
    ];

    const location = useLocation();


    return (
        <>
            {routes?.map(({ id, path, title, icon: Icon }) => {
                const isActive = location.pathname === path;
                return (
                    <SidebarItem key={id} as={NavLink} to={path} icon={() => (
                        <Icon
                            className={
                                isActive
                                    ? "text-(--text-white)"
                                    : "text-(--text-primary) group-hover:text-(--text-white)"
                            }
                        />
                    )} className={
                        `group ${isActive
                            ? "font-semibold bg-(--primary-bg) text-(--text-white)"
                            : "hover:text-(--text-white)"}`
                    }>
                        {title}
                    </SidebarItem>
                )
            })}
        </>
    )
}

export default Links