"use client"
import BasePageContainer from '@/components/layout/PageContainer';
import Contents from '@/components/shared/Contents';
import Footer from '@/components/shared/Footer';
import Headers from '@/components/shared/Headers';
import Sidebar from '@/components/shared/Sidebar';
import { antdConfig } from '@/constants/antConfig';
import { isLoggedIn } from '@/services/auth.service';
import { ConfigProvider, Layout } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const [collapsed, setCollapsed] = useState(false);
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
          router.push("/login");
        }
        setIsLoading(true);
      }, [router, isLoading, userLoggedIn]);
  return (
    <ConfigProvider {...antdConfig}>
      {/* <BasePageContainer> */}
    <Layout>
      <Headers />
      <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
      </Layout>
    </Layout>
      {/* </BasePageContainer> */}
    </ConfigProvider>
  )
}

export default DashboardLayout;