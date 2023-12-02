"use client"
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import { sidebarItems } from '@/constants/sidebarItems';
import { getUserInfo } from '@/services/auth.service';
import { IHasSider } from '@/types';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;

  const renderLogo = () => {
    if (collapsed) {
      return (
        <DashboardOutlined
          style={{
            fontWeight: 'bold',
            background: '#ffff',
            color: 'orange',
          }}
        />
      );
    }

    return (
      <p
        style={{
          color: '#F76F01',
          margin: '15px 0',
          textTransform: 'uppercase',
          fontSize: '1rem',
        }}
      >
        SpectraEvent-Solutions
      </p>
    );
  };

  return (
    <Sider
      style={{
        background: '#ffff',
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      // trigger={null}
      width={280}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <div
        style={{
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '1rem',
        }}
      >
        {renderLogo()}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        items={sidebarItems(role)}
        style={{
          background: '#ffff',
          color: 'GrayText',
        }}
      />
    </Sider>
  );
};

export default Sidebar;
