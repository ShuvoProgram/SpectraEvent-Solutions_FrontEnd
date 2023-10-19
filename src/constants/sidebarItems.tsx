/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Button, MenuProps, message } from "antd";
import {CommentOutlined, LogoutOutlined, TableOutlined, UserOutlined, UserSwitchOutlined} from "@ant-design/icons"
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
// role: string
export const sidebarItems = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async ()=> {
    // await signOut(auth).then(() => {
    //   dispatch(setUser(null))
    //   message.success('Logout Success')
    //   router.push('/')
    // })
  }
  

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/customer`}>Dashboard</Link>,
      key: "profile",
      icon: <UserOutlined />
    },
    {
      label: <Link href={`/profile/manage-booking`}>Manage Bookings</Link>,
      icon: <TableOutlined />,
      key: `/manage-booking`,
    },
    {
      label: <Link href={`/profile/favorite`}>Favorite</Link>,
      icon: <CommentOutlined />,
      key: `/favorite`,
    },
    {
      label: <Link href={`/customer/profile`}>Profile</Link>,
      icon: <CommentOutlined />,
      key: `/profile`,
    },
    {
      label: <p onClick={()=> handleLogout()} style={{color: 'red'}}>Logout</p>,
      icon: <LogoutOutlined style={{color: 'red'}} />,
      key: `/logout`,
    }
  ];
  const adminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/admin`}>Dashboard</Link>,
      key: "admin",
      icon: <UserOutlined />
    },
    {
      label: <Link href={`/admin/manage-booking`}>Customer Booking</Link>,
      icon: <TableOutlined />,
      key: `/manage-booking`,
    },
    {
      label: <Link href={`/admin/manage-customer`}>Manage Customer</Link>,
      icon: <CommentOutlined />,
      key: `/manage-customer`,
    },
    {
      label: <Link href={`/admin/manage-event`}>Manage Event</Link>,
      icon: <UserSwitchOutlined />,
      key: `/manage-event`,
    },
    {
      label: <Link href={`/admin/manage-organization`}>Manage Organization</Link>,
      icon: <UserSwitchOutlined />,
      key: `/manage-organization`,
    }, 
    {
        label: <Link href={`/admin/blog`}>Blog</Link>,
        key: "/blog",
        icon: <UserOutlined />
      },
    {
        label: <Link href={`/admin/faq`}>FAQ</Link>,
        key: "/faq",
        icon: <UserOutlined />
      },
    {
      label: <p onClick={()=> handleLogout()} style={{color: 'red'}}>Logout</p>,
      icon: <LogoutOutlined style={{color: 'red'}} />,
      key: `/logout`,
    },
  ];

  if('admin' === 'admin'){
    return adminSideBarItems;
  }
  else{
    return defaultSidebarItems;
  }
};
