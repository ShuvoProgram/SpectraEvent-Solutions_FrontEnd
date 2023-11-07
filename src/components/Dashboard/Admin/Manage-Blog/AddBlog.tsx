"use client"
import Form from '@/components/Form/Form';
import FormDatePicker from '@/components/Form/FormDatePicker';
import FormInput from '@/components/Form/FormInput';
import QuillEditor from '@/components/Form/QuillEditor';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UploadImage from '@/components/shared/UploadImage';
import { useCreateBlogMutation } from '@/redux/api/blogApi'
import { Button, Col, Row, UploadProps, message } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function AddBlog() {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [createBlog] = useCreateBlogMutation();
    const router = useRouter();

    const handleChange: UploadProps["onChange"] = async (
        info: UploadChangeParam<UploadFile>
      ) => {
        const image = info.file.originFileObj;
        const formData = new FormData();
        formData.append("image", image as Blob);
        try {
          const response = await axios.post(
            `https://api.imgbb.com/1/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    params: {
                        key: process.env.NEXT_PUBLIC_IMGBB_KEY,
                    },
                    }
          );
    
          setImageUrl(response.data.data.display_url);
        } catch (error) {
          console.error("Error uploading image to ImageBB:", error);
        }
      };

    const onSubmit = async (data: any) => {
        // const userInfo = getUserInfo() as any;
        // const userId = userInfo?.userId;
        data.image = imageUrl;
        message.loading("Creating....");
        try {
          const res = await createBlog(data).unwrap();
          if(res.id){
              message.success("Blog created successfully");
              router.push('/admin/manage-blog')
          } else {
            message.error("Blog creation failed");
          }
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
                            name="date"
                            label="Date"
                            size="large"
                        />
                    </Col>
                    <Col className='gutter-row mb-4' span={12}>
                        <UploadImage label='Image' name="image" imageUrl={imageUrl} handleChange={handleChange}/>
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