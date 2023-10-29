"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useCreateVanueMutation } from '@/redux/api/vanueApi'
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

function CreateVanue() {
    const [createVanue] = useCreateVanueMutation();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        try {
          const res = await createVanue(data).unwrap();
          if(res.id){
              message.success("Vanue created successfully!");
              router.push("/admin/manage-vanue");
          } else {
            message.error("Vanue created Unsuccessfully!");
          }
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
                        link: "/admin/manage-vanue",
                    },
                ]}
            />
             <h1 className="py-5 text-lg font-bold">Create Vanue</h1>
            <div>
                <Form submitHandler={onSubmit}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="title"
                                    size="large"
                                    label="Vanue Title"
                                />
                            </Col>
                        </Row>
                    <Button type="primary" danger htmlType="submit">
          Add Vanue
        </Button>
                </Form>
            </div>
    </div>
  )
}

export default CreateVanue;