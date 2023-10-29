"use client"
import Form from '@/components/Form/Form';
import FormDatePicker from '@/components/Form/FormDatePicker';
import FormInput from '@/components/Form/FormInput';
import QuillEditor from '@/components/Form/QuillEditor';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useCreateBlogMutation } from '@/redux/api/blogApi'
import { Button, Col, Row, message } from 'antd';
import React from 'react'

function AddBlog() {
    const [createBlog] = useCreateBlogMutation();

    const onSubmit = async (data: any) => {
        // const userInfo = getUserInfo() as any;
        // const userId = userInfo?.userId;
        message.loading("Creating....");
        try {
            await createBlog(data);
            message.success("Blog created successfully");
        } catch (error: any) {
            message.error(error.message)
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
        ]}
    />
        <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className='gutter-row mb-4' span={24}>
                        <FormInput
                            name="title"
                            label="Title"
                            type="text"
                            required
                        />
                    </Col>
                    <Col className='gutter-row mb-4' span={12}>
                        <FormInput
                            name="contentType"
                            label="Content Type"
                            size="large"
                            type="text"
                        />
                    </Col>
                    <Col className='gutter-row mb-4' span={12}>
                        <FormDatePicker
                            name="status"
                            label="Status"
                            size="large"
                        />
                    </Col>
                    <Col className='gutter-row mb-4' span={24}>
                    <QuillEditor
                    name='content'
                    label='content'
                    />
                    </Col>
                </Row>
            <Button type='primary' htmlType='submit' danger>Create Blog</Button>
        </Form>
    </div>
  )
}

export default AddBlog