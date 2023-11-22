"use client";
import React, { useState } from 'react'
import { Button, Col, Row, message } from "antd";
import { useCreateEventMutation } from '@/redux/api/eventApi';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormSelectField, { SelectOptions } from '@/components/Form/FormSelectedField';
import UploadImage from '@/components/shared/UploadImage';
import QuillEditor from '@/components/Form/QuillEditor';
import { useGetAllVanueQuery } from '@/redux/api/vanueApi';
import axios from 'axios';
import { UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload';
import { useRouter } from 'next/navigation';
import { isConfirm } from '@/types';

function CreateEvent() {
    const [createEvent] = useCreateEventMutation();
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const { data } = useGetAllCategoryQuery({
        limit: 100,
        page: 1,
    });
    const {data: VanueData} = useGetAllVanueQuery({
        limit: 100,
        page: 1
    })
    const category = data?.Category;
    const categoryOptions = category?.map((Or) => {
        return {
            label: Or?.name,
            value: Or?.id,
        };
    });
// @ts-ignore
    const Vanue = VanueData?.vanue?.data;
    const VanueOptions = Vanue?.map((Or: { title: any; id: any; }) => {
        return {
            label: Or?.title,
            value: Or?.id,
        }
    })

    const confirmOption = isConfirm.map((Or: {label: any, value: any}) => {
        return {
            label: Or?.label,
            value: Or?.value
        }
    })
    
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
        values.eventImg = imageUrl;
        values.price = parseInt(values.price);
        values.people = parseInt(values.people);
        message.loading("Creating...");
        try {
          
            const res = await createEvent({body: values}).unwrap();

            if (res?.id) {
                message.success("Event added successfully");
                router.push('/admin/manage-event')
            }
        } catch (err: any) {
            message.error(err.message);
        }
    };
    const base = "admin";
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
                    { label: `${base}`, link: `/${base}` },
                    { label: "manage-event", link: `/${base}/manage-event` },
                ]}
            />
            <h1>Create Event</h1>
            <Form submitHandler={onSubmit}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" size='large' />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                        <FormSelectField
                            name="CategoryId"
                            label="Category"
                            size='large'
                            options={categoryOptions as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                    <FormSelectField
                            name="vanueId"
                            label="Vanue"
                            size='large'
                            options={VanueOptions as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                        <FormInput name="price" label="Price" size='large' />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                        <FormInput name="people" label="People" size='large' />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                    <FormSelectField
                            name="isComingSoon"
                            label="isComingSoon"
                            size='large'
                            options={confirmOption as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                    <QuillEditor
                            name='facility'
                            label='Facility'
                        />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 0" }}>
                        <UploadImage label='Image' name="image" imageUrl={imageUrl} handleChange={handleChange}/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={{ margin: "10px 0" }}>
                        <QuillEditor
                            name='description'
                            label='Description'
                        />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" danger>
                    Create Event
                </Button>
            </Form>
        </div>
    )
}

export default CreateEvent