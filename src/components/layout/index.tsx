import { Dropdown } from 'antd';
import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import Icon, { LogoutOutlined } from '@ant-design/icons';
import { memo } from 'react';
import { RiShieldUserFill } from 'react-icons/ri';
import CONFIG from '../../../config';
import { sidebarItems } from '@/constants/sidebarItems';
import { getUserInfo } from '@/services/auth.service';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { role } = getUserInfo() as any;

  const defaultProps: ProLayoutProps = {
    title: CONFIG.appName,
    // logo: '/icon.png',
    fixedHeader: true,
    fixSiderbar: true,
    layout: CONFIG.theme.sidebarLayout,
    route: {
      routes: sidebarItems(role),
    },
  };

  return (
    <div className="h-screen">
      <ProLayout
        {...defaultProps}
        token={{
          sider: {
            colorMenuBackground: 'white',
          },
        }}
        location={location}
        avatarProps={{
          icon: <Icon component={RiShieldUserFill} />,
          className: 'bg-primary bg-opacity-20 text-primary text-opacity-90',
          size: 'small',
          shape: 'square',
          title: 'Admin',
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default memo(Layout);
