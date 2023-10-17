import { Layout } from "antd"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    <Layout hasSider>
        {children}
    </Layout>
}

export default DashboardLayout;