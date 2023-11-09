"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import UploadImage from '@/components/shared/UploadImage';
import { useGetAllCategoryQuery, useUpdateCategoryMutation } from '@/redux/api/categoryApi';
import { IDProps } from '@/types'
import { Button, Col, Row, message } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function UpdateCategory({params}: IDProps) {
    const { id } = params;
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const router = useRouter();
    const {data, isLoading} = useGetAllCategoryQuery(id);
    const [updateCategory] = useUpdateCategoryMutation();
    if(isLoading) {
      return <Spinner/>
    }

    // @ts-ignore
// const defaultValues = {
//   name: data?.Category.name || "",
// };

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
  
    const onSubmit = async (values: any) => {
        values.image = imageUrl;
      message.loading("Updating...");
      try {
        const res = await updateCategory({...values, id}).unwrap();
        if(res?.id){
            message.success("Category updated successfully!");
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
                        label: "Category",
                        link: "/admin/manage-category",
                    },
                ]}
            />
            <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Update Category
            </p>
            <div>
            {/* defaultValues={defaultValues} */}
                <Form submitHandler={onSubmit} >
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
                        <Button type="primary" danger htmlType="submit">
        Update Category
      </Button>
                </Form>
            </div>
    </div>
  )
}

export default UpdateCategory