"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UploadImage from '@/components/shared/UploadImage';
import { useCreateCategoryMutation } from '@/redux/api/categoryApi';
import { Button, Col, Row, UploadProps, message } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function CreateCategory() {
    const [createCategory] = useCreateCategoryMutation();
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState<string | null>(null);

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
        message.loading("Creating...");
        data.image = imageUrl;
        try {
          const res = await createCategory({...data}).unwrap();
          if(res?.id) {
              message.success("Category created successfully!");
              router.push('/admin/manage-category')
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
                        label: "Manage-Category",
                        link: "/admin/manage-category",
                    },
                ]}
            />
            <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
                Create Category
            </p>
            <Form submitHandler={onSubmit}>
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
                        <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                            <UploadImage label='Image' name="image" imageUrl={imageUrl} handleChange={handleChange}/>
                            </Col>
                    </Row>
                    <Button type='primary' htmlType='submit' danger>Create Category</Button>
            </Form>
        </div>
    )
}

export default CreateCategory