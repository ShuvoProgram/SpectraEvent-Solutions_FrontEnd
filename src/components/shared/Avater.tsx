import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];

export default function AvatarProfile() {
    return (
        <>
            <Dropdown menu={{ items }} placement="bottom" className='cursor-pointer'>
                <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
        </>
    )
}
