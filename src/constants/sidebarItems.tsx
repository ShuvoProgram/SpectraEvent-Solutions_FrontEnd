/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Button, MenuProps, message } from "antd";
import {CommentOutlined, LogoutOutlined, TableOutlined, UserOutlined, UserSwitchOutlined} from "@ant-design/icons"
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { USER_ROLE } from "./role";
// role: string
export const sidebarItems = (role: string) => {

  const handleLogout = async ()=> {
    // await signOut(auth).then(() => {
    //   dispatch(setUser(null))
    //   message.success('Logout Success')
    //   router.push('/')
    // })
  }
  

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}`}>Dashboard</Link>,
      key: "profile",
      icon: <UserOutlined />
    },
   
  ];
  const userSidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-booking`}>Manage Bookings</Link>,
      icon: <TableOutlined />,
      key: `/manage-booking`,
    },
    {
      label: <Link href={`/${role}/favorite`}>Favorite</Link>,
      icon: <CommentOutlined />,
      key: `/favorite`,
    },
    {
      label: <Link href={`/${role}/profile`}>Profile</Link>,
      icon: <CommentOutlined />,
      key: `/profile`,
    },
    {
      label: <p onClick={()=> handleLogout()} style={{color: 'red'}}>Logout</p>,
      icon: <LogoutOutlined style={{color: 'red'}} />,
      key: `/logout`,
    }
  ]
  const adminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}`}>Dashboard</Link>,
      key: "admin",
      icon: <UserOutlined />
    },
    {
      label: <Link href={`/${role}/manage-booking`}>Customer Booking</Link>,
      icon: <TableOutlined />,
      key: `/manage-booking`,
    },
    {
      label: <Link href={`/${role}/manage-customer`}>Manage Customer</Link>,
      icon: <CommentOutlined />,
      key: `/manage-customer`,
    },
    {
      label: <Link href={`/${role}/manage-event`}>Manage Event</Link>,
      icon: <UserSwitchOutlined />,
      key: `/manage-event`,
    },
    {
      label: <Link href={`/${role}/manage-organization`}>Manage Organization</Link>,
      icon: <UserSwitchOutlined />,
      key: `/manage-organization`,
    }, 
    {
        label: <Link href={`/${role}/manage-blog`}>Blog</Link>,
        key: "/manage-blog",
        icon: <UserOutlined />
      },
    {
        label: <Link href={`/${role}/manage-faq`}>FAQ</Link>,
        key: "/manage-faq",
        icon: <UserOutlined />
      },
    {
      label: <p onClick={()=> handleLogout()} style={{color: 'red'}}>Logout</p>,
      icon: <LogoutOutlined style={{color: 'red'}} />,
      key: `/logout`,
    },
  ];

  if(role === USER_ROLE.CUSTOMER){
    return userSidebarItem;
  } else if (role === USER_ROLE.ADMIN) {
    return adminSideBarItems
  }
  else{
    return defaultSidebarItems;
  }
};
