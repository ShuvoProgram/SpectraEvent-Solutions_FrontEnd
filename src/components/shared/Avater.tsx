'use client'
import React from 'react';
import { Avatar, Button, Dropdown, Menu, Popover } from 'antd';
import type { MenuProps } from 'antd';
// import { MenuBarItem } from '@/constants/menuBarItem';
import {
    UserOutlined,
    ProfileOutlined,
    AppstoreOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storageKey';

export default function AvatarProfile({ role }: any) {
    const router = useRouter();
    const logOut = () => {
        removeUserInfo(authKey);
        router.push("/login");
    };
   
    const defaultMenuItem = [
        {
            label: <Link href={`/${role}/profile`}>Account Profile</Link>,
            key: `/${role}/profile`,
            icon: <ProfileOutlined />,
        },
        {
            label: <Button onClick={logOut} type='text' danger>Log Out</Button>,
            key: "0",
            icon: <LogoutOutlined />,
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };



    // if (role === USER_ROLE.CUSTOMER) 
    const menu = (
        <Menu onClick={onClick}>
            {defaultMenuItem.map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    )

    return (
        <Dropdown overlay={menu} placement="bottom" className='cursor-pointer'>
            <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
    );
}
