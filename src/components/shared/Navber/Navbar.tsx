"use client";
import { Drawer, Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuBarItems } from '@/constants/menuBarItems';
import { getUserInfo, isLoggedIn } from '@/services/auth.service';
import Favorite from '../Favorite';
import { useGetAllFavoriteQuery } from '@/redux/api/favorite';
import dynamic from 'next/dynamic';

const AvatarProfile = dynamic(() => import('../Avater'), { ssr: false });
// Other imports...

// Existing code...

function Navbar() {
  // Existing code...
  

  const [drawerVisible, setDrawerVisible] = useState(false);
  const userLoggedIn = isLoggedIn();
  const { role } = getUserInfo() as any;

  const {data, refetch, isLoading} = useGetAllFavoriteQuery({
    pollingInterval: 3000,
  })

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menu = MenuBarItems(role);

  const renderNavLinks = () => {
    return menu.map((item, index) => (
      <li key={index} className=''>
        <Link href={item.path} className="text-gray-700">{item.name}</Link>
      </li>
    ));
  };

  const renderDesktopNavLinks = () => {
    return (
      <ul className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-base">
        {renderNavLinks()}
      </ul>
    );
  };

  const renderDrawerLinks = () => {
    return (
      <ul className="drawer-menu">
        {menu.map((item, index) => (
          <li key={index} className="">
            <Link href={item.path} className="text-gray-700" onClick={closeDrawer}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 py-2">
        <div className="navigation w-full md:max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto">
          <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
            <Image src="https://i.ibb.co/tbYktFp/logo-removebg-preview.png" width={220} height={50} alt="SpectraEventSolutions" />
          </a>

          {/* Desktop navigation */}
          {renderDesktopNavLinks()}

          
            <div className="flex xs:flex items-center gap-4 md:gap-10 lg:gap-10">
            <Link href={`/user/favorite`}>
                <Favorite count={data?.length}/>
                </Link>
                {
                  userLoggedIn 
                  === true ? (<AvatarProfile/>) : ''
                }
          {/* Button to trigger drawer on mobile */}
          <div className='md:hidden'>
          <Button type='text' onClick={showDrawer} className="drawer-toggle">
            <MenuFoldOutlined className="h-12 w-12" />
          </Button>
          </div>
            </div>

        </div>
      </nav>

      {/* Drawer for mobile */}
      <Drawer
        placement="right"
        closable={false}
        onClose={closeDrawer}
        visible={drawerVisible}
        className="custom-drawer "
        width={300}
      >
        {renderDrawerLinks()}
        {/* Add other drawer content as needed */}
      </Drawer>
    </>
  );
}

export default Navbar;
