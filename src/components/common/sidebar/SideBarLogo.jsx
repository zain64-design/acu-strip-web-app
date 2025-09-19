
import React from 'react'
import { Link } from 'react-router'
import Image from '../../ui/Image'
import logoLight from '/images/logo.png'

const SideBarLogo = () => {
    return (
        <>
            <Link href="/">
                <Image src={logoLight} alt="logo" className="h-[50px] md:h-[96px] object-contain object-center max-w-fit dark:block mx-auto" />
            </Link>
        </>
    )
}

export default SideBarLogo