'use client'
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useCreateOrganizationMutation } from '@/redux/api/organizationApi'
import { Button, Col, Row, message } from 'antd';
import React from 'react'

function CreateOrganizationPage() {
    const [createOrganization] = useCreateOrganizationMutation();
    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            await createOrganization(data);
            message.success("Category created successfully!");
        } catch (err: any) {
            message.error(err.message);
        }
    };
  return (
    <div>
         <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "Manage-Organization",
                        link: "/admin/manage-organization",
                    },
                ]}
            />
             <h1 className="py-5 text-lg font-bold">Create Category</h1>
             <div>
             <Form submitHandler={onSubmit}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">  Category Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="name"
                                    size="large"
                                    label="Title"
                                />
                            </Col>
                        </Row>
                    </div>
                    <Button type='primary' htmlType='submit' danger>Create Category</Button>
                </Form>
             </div>
    </div>
  )
}

export default CreateOrganizationPage