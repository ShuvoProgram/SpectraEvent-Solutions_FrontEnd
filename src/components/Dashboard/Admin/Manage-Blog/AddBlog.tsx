import Form from '@/components/Form/Form';
import FormDatePicker from '@/components/Form/FormDatePicker';
import FormInput from '@/components/Form/FormInput';
import QuillEditor from '@/components/Form/QuillEditor';
import { useCreateBlogMutation } from '@/redux/api/blogApi'
import { getUserInfo } from '@/services/auth.service';
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
    <div>
            <h1 className="py-5 text-lg font-bold">Create New Blogs</h1>
            <div>
                <Form submitHandler={onSubmit}>
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Blog Information</h1>
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
                    </div>
                    <Button type='primary' htmlType='submit' style={{
                        backgroundColor:  "#54B435"
                    }}>Create Blog</Button>
                </Form>
            </div>
    </div>
  )
}

export default AddBlog