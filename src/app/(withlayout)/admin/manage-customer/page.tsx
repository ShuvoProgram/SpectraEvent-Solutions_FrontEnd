import MangeCustomer from "@/components/Dashboard/Admin/Manage-Customer/MangeCustomer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Manage Customer`,
    description: 'Best Event Management Website',
  }

const ManageCustomerList = () => {

    return (
        <div>
            <MangeCustomer />
        </div>
    )
};

export default ManageCustomerList;