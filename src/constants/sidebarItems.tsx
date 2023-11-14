/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { MenuProps } from "antd";
import {CommentOutlined, TableOutlined, UserOutlined, UserSwitchOutlined} from "@ant-design/icons"
import Link from "next/link";
import { USER_ROLE } from "./role";
// role: string
export const sidebarItems = (role: string) => {


  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}`}>Dashboard</Link>,
      key: "profile",
      icon: <UserOutlined />
    },
   
  ];
  const userSidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/my-booking`}>My Bookings</Link>,
      icon: <TableOutlined />,
      key: `/my-booking`,
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
      label: <Link href={`/${role}/manage-vanue`}>Manage Vanue</Link>,
      icon: <CommentOutlined />,
      key: `/manage-vanue`,
    },
    {
      label: <Link href={`/${role}/manage-event`}>Manage Event</Link>,
      icon: <UserSwitchOutlined />,
      key: `/manage-event`,
    },
    {
      label: <Link href={`/${role}/manage-category`}>Manage Category</Link>,
      icon: <UserSwitchOutlined />,
      key: `/manage-category`,
    }, 
    {
        label: <Link href={`/${role}/manage-blog`}>Manage Blog</Link>,
        key: "/manage-blog",
        icon: <UserOutlined />
      },
    {
        label: <Link href={`/${role}/manage-faq`}>Manage FAQ</Link>,
        key: "/manage-faq",
        icon: <UserOutlined />
      },
    {
        label: <Link href={`/${role}/manage-feedback`}>Manage Feedback</Link>,
        key: "/manage-feedback",
        icon: <UserOutlined />
      }
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-admin`}>Manage-Admin</Link>,
      key: "/manage-admin",
      icon: <UserOutlined/>
    }
  ]

  if(role === USER_ROLE.CUSTOMER){
    return userSidebarItem;
  } else if (role === USER_ROLE.ADMIN) {
    return adminSideBarItems
  } else if (role === USER_ROLE.SUPER_ADMIN) {
    return superAdminSidebarItems
  }
  else{
    return defaultSidebarItems;
  }
};
