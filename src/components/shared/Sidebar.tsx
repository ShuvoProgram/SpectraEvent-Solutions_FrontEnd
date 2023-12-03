import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { sidebarItems } from '@/constants/sidebarItems';
import { getUserInfo } from '@/services/auth.service';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const { role } = getUserInfo() as any;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const renderLogo = () => {
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
    <>
      <Button
        shape="circle"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{
          display: 'block',
          position: 'fixed',
          top: '80px',
          left: '20px',
          zIndex: 999,
        }}
      />

      <Drawer
        title={renderLogo()}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={280}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          items={sidebarItems(role)}
          style={{
            background: '#ffff',
            color: 'GrayText',
          }}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
