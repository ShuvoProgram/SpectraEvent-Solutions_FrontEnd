'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import AvatarProfile from './Avater';
import SwitchTheme from './Switch';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const role = 'customer'
    return (
        <div className="z-10 w-full font-mono text-sm lg:flex">
            <nav className='left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
                <div className="w-full mx-4">
                    <div className="flex mx-auto justify-between">
                        {/* Primary menu and logo */}
                        <div className="flex items-center gap-16 my-4">
                            {/* logo */}
                            <div>
                                <a
                                    href="/"
                                    className="flex gap-1 font-bold text-gray-700 items-center "
                                >
                                    <Image src={`https://i.ibb.co/tbYktFp/logo-removebg-preview.png`} width={250} height={100} alt='SpectraEventSolutions' />
                                </a>
                            </div>
                            {/* primary */}
                            <div className="hidden lg:flex gap-8 ">
                                <a href="#" className="">
                                    Home
                                </a>
                                <a href="#">Benefits</a>
                                <a href="/events">Our Events</a>
                                <a href="#">Contact Us</a>
                                <a href="/checkout">Checkout</a>
                                <a href="/about">About Us</a>
                            </div>
                        </div>
                        {/* secondary */}
                        <div className="flex gap-6">
                            <div className="flex xs:flex items-center gap-10">
                                <div className="hidden lg:flex items-center gap-2">
                                   <SwitchTheme/>
                                </div>
                                <div>
                                    <AvatarProfile role={role} />
                                </div>
                                <div>
                                    <Link href={'/login'} className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                                        Login
                                    </Link>
                                </div>
                            </div>
                            {/* Mobile navigation toggle */}
                            <div className="lg:hidden flex items-center">
                                <button onClick={() => setToggleMenu(!!toggleMenu)}>
                                    <RxHamburgerMenu className="h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile navigation */}
                <div
                    className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                        }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-8 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-gray-600">
                                Features
                            </a>
                            <a href="#">Pricing</a>
                            <a href="#">Download</a>
                            <a href="#">Classic</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
