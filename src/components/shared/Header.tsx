'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
// import AvatarProfile from './Avater';
import SwitchTheme from './Switch';
import { getUserInfo, isLoggedIn, removeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '@/constants/storageKey';
import Search from './Search';
import Favorite from './Favorite'; 
import dynamic from 'next/dynamic';

const AvatarProfile = dynamic(() => import('./Avater'), { ssr: false });

export default function Header() {
    const userLoggedIn = isLoggedIn();
    const [carteOpen, setCartOpn] = useState(false)

    const [toggleMenu, setToggleMenu] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const logOut = () => {
        removeUserInfo(authKey);
        router.push("/login");
    };
    const handleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const { role } = getUserInfo() as any;
    return (
        <div className="w-full font-mono text-sm lg:flex">
            <nav className='flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
                <div className="w-full mx-4 sm:top-20">
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
                        {/* search component  */}
              <div className='flex justify-center items-center gap-3'>
                <Search />
                <Favorite setCartOpen={setCartOpn} cartOpen={carteOpen} />
              </div>
                        {/* secondary */}
                        <div className="flex gap-6">
                            <div className="flex xs:flex items-center gap-10">
                                
                                <div>
                                    {
                                        userLoggedIn ? <AvatarProfile role={role} logout={logOut} /> : null
                                    }

                                </div>
                                <div>
                                    <Link href={'/login'} className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                                        Login
                                    </Link>
                                </div>
                            </div>
                            {/* Mobile navigation toggle */}
                            {/* menu Icon  */}
                            <div
                                className='sm:hidden cursor-pointer flex justify-center items-center'
                                onClick={handleNav}
                            >
                                {
                                    toggleMenu ? <AiOutlineClose /> : <RxHamburgerMenu className="h-6" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* nav menu & close icon */}
                <div
                    className={
                        toggleMenu
                            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 h-screen'
                    }
                >
                    {/* mobile menu list  */}
                    <div className='flex-col py-4'>
                        <ul>
                            <Link href='/about'>
                                <li
                                    className='py-4 cursor-pointer'
                                    onClick={() => setToggleMenu(false)}
                                >
                                    About
                                </li>
                            </Link>
                            <Link href='/contact'>
                                <li
                                    className='py-4 cursor-pointer'
                                    onClick={() => setToggleMenu(false)}
                                >
                                    contact
                                </li>
                            </Link>
                            <Link href='/blogs'>
                                <li
                                    className='py-4 cursor-pointer'
                                    onClick={() => setToggleMenu(false)}
                                >
                                    blogs
                                </li>
                            </Link>
                            <Link href='/services'>
                                <li
                                    className='py-4 cursor-pointer'
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Services
                                </li>
                            </Link>
                        </ul>
                        <div className='w-full flex justify-evenly items-center gap-2 border-t-2 border-gray-500 mt-3 pt-3'>
                            <div className='flex justify-center items-center'>
                                <Search />
                            </div>
                            <div>
                                {/* <Cart /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
