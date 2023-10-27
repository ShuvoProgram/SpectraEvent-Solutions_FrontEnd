"use client";
import React from 'react'
import { Button, Col, Row, message } from "antd";
import { useCreateEventMutation } from '@/redux/api/eventApi';
import { useGetAllOrganizationQuery } from '@/redux/api/organizationApi';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormSelectField, { SelectOptions } from '@/components/Form/FormSelectedField';
import UploadImage from '@/components/shared/UploadImage';
import QuillEditor from '@/components/Form/QuillEditor';

function CreateEvent() {
    const [createEvent] = useCreateEventMutation();
    const { data, isLoading } = useGetAllOrganizationQuery({
        limit: 100,
        page: 1,
    });
    const organization = data?.organization;
    const organizationOptions = organization?.map((Or) => {
        return {
            label: Or?.name,
            value: Or?.id,
        };
    });
    const onSubmit = async (values: any) => {
        const obj = { ...values };
        const file = obj["file"];
        delete obj["file"];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("data", data);
        message.loading("Creating...");
        try {
            const res = await createEvent(formData).unwrap();
            // console.log(res);
            if (res?.id) {
                message.success("Event added successfully");
            }
        } catch (err: any) {
            console.error(err.message);
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
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={24} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" size='large' />
                    </Col>
                    <Col span={6} style={{ margin: "10px 0" }}>
                        <FormSelectField
                            name="organization"
                            label="Organization"
                            size='large'
                            options={organizationOptions as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col span={6} style={{ margin: "10px 0" }}>
                        <FormInput name="location" label="Location" size='large' />
                    </Col>
                    <Col span={6} style={{ margin: "10px 0" }}>
                        <FormInput name="price" label="Price" size='large' />
                    </Col>
                    <Col span={6} style={{ margin: "10px 0" }}>
                        <FormInput name="maxCapacity" label="MaxCapacity" size='large' />
                    </Col>
                    <Col span={6} style={{ margin: "10px 0" }}>
                        <FormInput name="facility" label="Facility" size='large' />
                    </Col>
                    <Col span={6} style={{ margin: "10px 0" }}>
                        <FormInput name="availableSeats" label="AvailableSeats" size='large' />
                    </Col>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <UploadImage name="file" />
                    </Col>
                    <Col span={24} style={{ margin: "10px 0" }}>
                        <QuillEditor
                            name='description'
                            label='Description'
                        />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    add
                </Button>
            </Form>
        </div>
    )
}

export default CreateEvent