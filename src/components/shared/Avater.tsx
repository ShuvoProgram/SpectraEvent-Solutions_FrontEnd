import React from 'react';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';
// import { MenuBarItem } from '@/constants/menuBarItem';
import {
    UserOutlined,
    ProfileOutlined,
    AppstoreOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from '@/constants/role';
import { removeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '@/constants/storageKey';

export default function AvatarProfile({ role, logOut }: any) {
   
    const defaultMenuItem = [
        {
            label: <Link href={`/${role}/profile`}>Account Profile</Link>,
            key: `/${role}/profile`,
            icon: <ProfileOutlined />,
        },
        {
            label: <Link href={`/${role}/`}>Dashboard</Link>,
            key: `/${role}/`,
            icon: <AppstoreOutlined />,
        },
        {
            label: <Button onClick={logOut}>Log Out</Button>,
            key: `logout`,
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
