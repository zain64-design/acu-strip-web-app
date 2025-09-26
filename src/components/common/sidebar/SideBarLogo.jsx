
import React from 'react'
import { Link } from 'react-router'
import Image from '../../ui/Image'
import logoLight from '/images/logo.png'

const SideBarLogo = ({className}) => {
    return (
        <>
            <Link href="/">
                <Image src={logoLight} alt="logo" className={`${className} object-contain object-center max-w-fit dark:block mx-auto`} />
            </Link>
        </>
    )
}

export default SideBarLogo