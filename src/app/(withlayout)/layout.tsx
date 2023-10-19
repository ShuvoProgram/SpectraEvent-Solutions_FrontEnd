// 'use client';
import Contents from "@/components/shared/Contents";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import { Layout } from "antd"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    <>
    <Header/>
    <Layout hasSider>
        <Sidebar/>
        <Contents>{children}</Contents>
    </Layout>
    </>
}

export default DashboardLayout;