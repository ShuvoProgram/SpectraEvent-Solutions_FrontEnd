"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { getUserInfo, isLoggedIn } from '@/services/auth.service';
import Search from './Search';
import Favorite from './Favorite';
import dynamic from 'next/dynamic';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Button, Row, Space, Spin } from 'antd';
import { IHasSider } from '@/types';
import { useRouter } from 'next/navigation';
import { useGetAllFavoriteQuery } from '@/redux/api/favorite';

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


export default function Header({ hasSider, collapsed,  setCollapsed}: IHasSider) {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { role } = getUserInfo() as any;
  const {data, refetch} = useGetAllFavoriteQuery({})
  

  const handleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  // useEffect(() => {
  //   if (userLoggedIn) {
  //     refetch();
  //   }
  // }, [userLoggedIn, refetch])
  const renderNavLinks = () => {
    return LinkItems.map((item, index) => (
      <Link href={item.path} key={index}>
        <li className="text-gray-700 hover:text-gray-900">{item.name}</li>
      </Link>
    ));
  };

  return (
    <div className="w-full font-mono text-sm lg:flex">
      <nav className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
        <div className="w-full mx-4 sm:top-20">
          <div className="flex mx-auto justify-between">
            <div className="flex items-center gap-16 my-4">
              <div>
                <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                  <Image src="https://i.ibb.co/tbYktFp/logo-removebg-preview.png" width={250} height={100} alt="SpectraEventSolutions" />
                </a>
              </div>
              <ul className="hidden lg:flex gap-8">{renderNavLinks()}</ul>
            </div>
            <div className="flex gap-6">
              <div className="flex xs:flex items-center gap-10">
                <Search />
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
              {hasSider === false ? (
                <div className="sm:hidden cursor-pointer flex justify-center items-center" onClick={handleNav}>
                  {toggleMenu ? <AiOutlineClose /> : <RxHamburgerMenu className="h-6" />}
                </div>
              ) : (
                <div className="sm:hidden cursor-pointer flex justify-center items-center">
                 <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            // onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
                </div>
              )}
            </div>
          </div>
        </div>
        {hasSider === false ? (
          <div className={toggleMenu ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 h-screen'}>
            <div className="flex-col py-4">
              <ul>
                <Link href="/about">
                  <li className="py-4 cursor-pointer" onClick={() => setToggleMenu(false)}>About</li>
                </Link>
                <Link href="/contact">
                  <li className="py-4 cursor-pointer" onClick={() => setToggleMenu(false)}>Contact</li>
                </Link>
                <Link href="/blogs">
                  <li className="py-4 cursor-pointer" onClick={() => setToggleMenu(false)}>Blogs</li>
                </Link>
                <Link href="/services">
                  <li className="py-4 cursor-pointer" onClick={() => setToggleMenu(false)}>Services</li>
                </Link>
                <Link href="/login" className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">Login</Link>
              </ul>
              <div className="w-full flex justify-evenly items-center gap-2 border-t-2 border-gray-500 mt-3 pt-3">
                <div className="flex justify-center items-center"><Search /></div>
                <div>{/* Cart Component */}</div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}
