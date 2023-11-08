"use client";
import Form from '@/components/Form/Form'
import FormInput from '@/components/Form/FormInput'
import QuillEditor from '@/components/Form/QuillEditor'
import BreadCrumb from '@/components/shared/BreadCrumb'
import UploadImage from '@/components/shared/UploadImage'
import { useGetSingleBlogQuery, useUpdateBlogMutation } from '@/redux/api/blogApi'
import { IDProps } from '@/types'
import { Button, Col, Row, UploadProps, message } from 'antd'
import { UploadChangeParam, UploadFile } from 'antd/es/upload'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function UpdateBlog({params}: IDProps) {
    const { id } = params;
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const router = useRouter();

    const {data, isLoading} = useGetSingleBlogQuery(id);
    const [updateBlog] = useUpdateBlogMutation();
    //  @ts-ignore
const defaultValues = {
  title: data?.title || "",
  contentType: data?.contentType || "",
  content: data?.content || "",
  image: data?.image || ""
 };

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
        const res = await updateBlog({body: values, id}).unwrap();
        if(res?.id){
            message.success("Category updated successfully!");
            router.push('/admin/manage-blog')
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
                        label: "Manage-Blog",
                        link: "/admin/manage-blog",
                    },
                ]}
            />
              <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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

export default UpdateBlog