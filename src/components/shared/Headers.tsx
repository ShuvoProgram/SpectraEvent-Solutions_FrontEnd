"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { getUserInfo, isLoggedIn } from '@/services/auth.service';
import Favorite from './Favorite';
// import { useRouter } from 'next/navigation';
import { useGetAllFavoriteQuery } from '@/redux/api/favorite';
import dynamic from 'next/dynamic';
import { MenuFoldOutlined } from '@ant-design/icons';
// import { useRouter } from 'next/navigation';
const AvatarProfile = dynamic(() => import('./Avater'), { ssr: false });


const LinkItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Events',
      path: '/events',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]; 

function Headers() {
    const userLoggedIn = isLoggedIn();
    const [cartOpen, setCartOpen] = useState(false);
  const { role } = getUserInfo() as any;
  const {data, refetch} = useGetAllFavoriteQuery({})
    const renderNavLinks = () => {
        return LinkItems.map((item, index) => (
          <li key={index} className=''>
            <Link href={item.path} className="text-gray-700">{item.name}</Link>
          </li>
        ));
      };
  return (
    <header>
  <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-4">
    <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                  <Image src="https://i.ibb.co/tbYktFp/logo-removebg-preview.png" width={250} height={100} alt="SpectraEventSolutions" />
                </a>
      <input type="checkbox" id="check" />
     
      <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
        {renderNavLinks()}
        
        <label htmlFor="check" className="close-menu">X</label>
      </span>
      <div className="flex md:gap-6 sm:pr-20">
              <div className="flex xs:flex items-center gap-4 md:gap-10 lg:gap-10">
                <Favorite setCartOpen={setCartOpen} cartOpen={cartOpen} count={data?.fav?.length}/>
                <div>
                  {userLoggedIn ? (
                    <AvatarProfile role={role} />
                  ) : (
                    <div className="hidden md:block lg:block">
                      <Link href="/login" className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
      <label htmlFor="check" className="open-menu">
        <MenuFoldOutlined className='h-12 w-12'/>
      </label>
    </ul>
  </nav>
</header>
  )
}

export default Headers;