"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import { useGetSingleCustomerQuery, useUpdateCustomerMutation } from '@/redux/api/userApi';
import { IDProps } from '@/types'
import { Col, Row, message } from 'antd';
import React from 'react'

function UpdateCustomer({ params }: IDProps) {
    const { id } = params;
    const { data, isLoading } = useGetSingleCustomerQuery(id);
    const [updateCustomer] = useUpdateCustomerMutation();

    if (isLoading) {
        return <Spinner />
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        try {
            await updateCustomer({ id, body: values });
            message.success("User updated successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };




  return (
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
                    {
                        label: "Manage-Customer",
                        link: "/admin/manage-customer",
                    },
                ]}
            />
         <h1 className="py-5 text-lg font-bold">Update Customer</h1>
         <div>
         {/* defaultValues={defaultValues} */}
                <Form submitHandler={onSubmit} >
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Update User Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="firstName"
                                    size="large"
                                    label="First Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="middleName"
                                    size="large"
                                    label="Middle Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="lastName"
                                    size="large"
                                    label="Last Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="contactNo"
                                    size="large"
                                    label="Contact No"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="address"
                                    size="large"
                                    label="Address"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="profileImg"
                                    size="large"
                                    label="Image Link"
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-violet-600 text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update User</button>
                </Form>
            </div>
    </div>
  )
}

export default UpdateCustomer