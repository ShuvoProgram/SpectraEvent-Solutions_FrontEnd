"use client"
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Sider } = Layout;
// import { sidebarItems } from '@/constant/sidebarItems';
import { useAppSelector } from "@/redux/hooks";
// import IUser from '@/Types';
// import { useGetUsersQuery } from '@/redux/features/userApi';
import { DashboardOutlined } from '@ant-design/icons';
import { sidebarItems } from '@/constants/sidebarItems';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
//   const {user, isLoading, isError} = useAppSelector(state=> state.user)
//   const {data, isLoading:dbUserLoading, isError: dbUserIsError} = useGetUsersQuery(null)
//   const allUsers:IUser[] = data?.data
//   let role:string

//   if (!isLoading && !isError && !dbUserLoading && !dbUserLoading && !dbUserIsError  && user?.email && allUsers?.length > 0){
//     allUsers.find( dbUser => {

//       if(dbUser.email === user?.email && dbUser.role === 'admin'){
//         role = 'admin'
//       }
//   })}
  
  return (
    <Sider
     style={{
      overflow: 'auto',
      height: '100vh',
      position: 'sticky',
      left: 0,
      top: 0,
      bottom: 0
     }}
     width={280}
     collapsible
     collapsed={collapsed} 
     onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div style={{
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem',
          marginTop: '1rem'
        }}>
          {
            collapsed? <><DashboardOutlined style={{fontWeight: 'bold'}} /></> : <>Dashboard</>
          }
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems()} />
    </Sider>
  );
};

export default Sidebar;