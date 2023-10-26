import MangeCustomer from "@/components/Dashboard/Admin/Manage-Customer/MangeCustomer";
import BreadCrumb from "@/components/shared/BreadCrumb";

const ManageCustomerList = () => {
   
return(
    <div
    style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
          <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
            <MangeCustomer/>
    </div>
)
};

export default ManageCustomerList;