"use client"
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormSelectField, { SelectOptions } from '@/components/Form/FormSelectedField';
import QuillEditor from '@/components/Form/QuillEditor';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import { useGetSingleEventQuery, useUpdateEventMutation } from '@/redux/api/eventApi';
import { useGetAllLocationQuery, useGetSingleLocationQuery } from '@/redux/api/locationApi';
import { useGetAllOrganizationQuery, useGetSingleOrganizationQuery } from '@/redux/api/organizationApi';
import { IDProps } from '@/types'
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

function EventUpdate({params}: IDProps) {
    const {id} = params;
    const router = useRouter();
    const { data, isLoading } = useGetSingleEventQuery(id);
    const [updateEvent] = useUpdateEventMutation();


    const { data: organizationData } = useGetAllOrganizationQuery({
        limit: 100,
        page: 1,
    });
    const {data: locationData} = useGetAllLocationQuery({
        limit: 100,
        page: 1
    })
    const organization = organizationData?.organization;
    const organizationOptions = organization?.map((Or) => {
        return {
            label: Or?.name,
            value: Or?.id,
        };
    });

    const location = locationData?.location?.data;
    const locationOptions = location?.map((Or) => {
        return {
            label: Or?.title,
            value: Or?.id,
        }
    })

    if(isLoading) {
        return <Spinner/>
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        try {
            values.price = parseInt(values.price);
        values.maxCapacity = parseInt(values.maxCapacity);
         const res = await updateEvent({ ...values }).unwrap();
         if(res?.id){
             message.success("Event updated successfully!");
             router.push('/admin/manage-event')
         }
        } catch (err: any) {
            message.error(err.message);
        }
    };

       // @ts-ignore
       const defaultValues = {
        title: data?.title || "",
        locationId: data?.locationId || "",
        organizationId: data?.organizationId || "",
        price: data?.price || "",
        maxCapacity: data?.maxCapacity || "",
        description: data?.description || "",
        facility: data?.facility || "",
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
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" size='large' />
                    </Col>
                   
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                        <FormInput name="price" label="Price" size='large' />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                        <FormInput name="maxCapacity" label="MaxCapacity" size='large' />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                        <FormSelectField
                            name="organizationId"
                            label="Organization"
                            size='large'
                            options={organizationOptions as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col>
                    <FormSelectField
                            name="locationId"
                            label="Location"
                            size='large'
                            options={locationOptions as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                    <QuillEditor
                            name='facility'
                            label='Facility'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={{ margin: "10px 0" }}>
                        <QuillEditor
                            name='description'
                            label='Description'
                        />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Update Event
                </Button>
            </Form>
        </div>
  )
}

export default EventUpdate