import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
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
    <div>
         <h1 className="py-5 text-lg font-bold">Update Customer</h1>
         <div>
         {/* defaultValues={defaultValues} */}
                <Form submitHandler={onSubmit} >
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Update User Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="name"
                                    size="large"
                                    label="Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="text"
                                    name="email"
                                    size="large"
                                    label="Email"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={12}
                            >
                                <FormInput
                                    type="password"
                                    name="password"
                                    size="large"
                                    label="Password"
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