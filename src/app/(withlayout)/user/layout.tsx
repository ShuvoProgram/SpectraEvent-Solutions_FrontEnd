"use client"
import Contents from "@/components/shared/Contents";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//     title: `SpectraEvent-Solutions | Dashboard`,
//     description: 'Best Event Management Website',
// }

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
          router.push("/login");
        }
        setIsLoading(true);
      }, [router, isLoading, userLoggedIn]);
    
    //   if (!isLoading) {
    //     return <Loader />
    //   }

    <>
    <Header hasSider={true} collapsed={collapsed} setCollapsed={setCollapsed}/>
    <Layout>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Layout style={{ padding: '0 24px 24px' }}>
        <Contents>{children}</Contents>
        </Layout>
    </Layout>
    <Footer/>
 </>
}

export default DashboardLayout;