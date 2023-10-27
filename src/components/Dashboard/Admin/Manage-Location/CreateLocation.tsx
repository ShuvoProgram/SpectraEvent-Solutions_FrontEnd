"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useCreateLocationMutation } from '@/redux/api/locationApi'
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

function CreateLocation() {
    const [createLocation] = useCreateLocationMutation();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
            await createLocation(data);
            message.success("Location created successfully!");
            router.push("/admin/manage-location");
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
                        label: "Faq",
                        link: "/admin/manage-location",
                    },
                ]}
            />
             <h1 className="py-5 text-lg font-bold">Create Location</h1>
            <div>
                <Form submitHandler={onSubmit}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">  Location Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="title"
                                    size="large"
                                    label="Location Title"
                                />
                            </Col>
                        </Row>
                    </div>
                    <Button type="primary" danger htmlType="submit">
          Add Location
        </Button>
                </Form>
            </div>
    </div>
  )
}

export default CreateLocation;