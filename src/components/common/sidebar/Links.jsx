import { NavLink } from "react-router";
import { UserIcon, DashboardIcon, EarningIcon, SettingIcon, LogOutIcon } from "../../ui/Icons";

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


    return (
        <>
            {routes.map(({ id, path, title, icon: Icon }) => (
                <li key={id}>
                    <NavLink
                        to={path}
                        className={({ isActive }) =>
                            `sideLinks group ${isActive
                                ? "font-semibold bg-(--bg-primary) text-(--text-white)"
                                : "hover:text-(--text-white)"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon
                                    className={
                                        isActive
                                            ? "text-(--text-white)"
                                            : "text-(--text-primary) group-hover:text-(--text-white)"
                                    }
                                />
                                {title}
                            </>
                        )}
                    </NavLink>
                </li>
            ))}
        </>
    )
}

export default Links