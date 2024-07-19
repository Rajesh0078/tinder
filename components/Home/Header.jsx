'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollEventListener = () => {
        if (window.scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollEventListener)

        return () => {
            window.removeEventListener("scroll", scrollEventListener)
        }
    }, [])
    return (
        <header className={`h-[70px] flex justify-between items-center px-[5%] md:px-[15%] fixed w-full  z-10 transition-all duration-300 ${scrolled ? 'glass shadow-md' : ''}`}>
            <Link href={'/'} className='uppercase text-[15px] md:text-[24px] font-bold'>
                <span >Love </span>
                <span className='text-primary'>Capsule</span>
            </Link>
            <div className='text-[13px] md:text-[16px] font-semibold flex h-9 bg-white shadow-md'>
                <Link href={'/auth'} className='flex justify-center items-center px-3 md:px-6'>Login</Link>
                <Link href={{ pathname: "/auth", query: { type: "register" } }} className='flex justify-center items-center px-3 md:px-6 bg-primary text-white'>Register</Link>
            </div>
        </header>
    )
}

export default Header
