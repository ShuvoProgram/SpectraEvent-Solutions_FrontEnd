"use client"
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormSelectField, { SelectOptions } from '@/components/Form/FormSelectedField';
import QuillEditor from '@/components/Form/QuillEditor';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { useGetSingleEventQuery, useUpdateEventMutation } from '@/redux/api/eventApi';
import { useGetAllVanueQuery, useGetSingleVanueQuery } from '@/redux/api/vanueApi';
import { IDProps, isConfirm } from '@/types'
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

function EventUpdate({params}: IDProps) {
    const {id} = params;
    const router = useRouter();
    const { data, isLoading } = useGetSingleEventQuery(id);
    const [updateEvent] = useUpdateEventMutation();


    const { data: categoryData } = useGetAllCategoryQuery({
        limit: 100,
        page: 1,
    });
    const {data: VanueData} = useGetAllVanueQuery({
        limit: 100,
        page: 1
    })
    const category = categoryData?.Category;
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
    
    if(isLoading) {
        return <Spinner/>
    }

    const onSubmit = async (values: any) => {
        message.loading("Updating...");
        try {
            values.price = parseInt(values.price);
        values.people = parseInt(values.people);
         const res = await updateEvent({body: values, id}).unwrap();
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
        vanueId: Vanue?.name || "",
        organizationId: data?.organizationId || "",
        price: data?.price || "",
        people: data?.people || "",
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
                        <FormInput name="people" label="People" size='large' />
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
                    <FormSelectField
                            name="isComingSoon"
                            label="IsComingSoon"
                            size='large'
                            options={confirmOption as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={{ margin: "10px 10px" }}>
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
                <Button type="primary" htmlType="submit" danger>
                    Update Event
                </Button>
            </Form>
        </div>
  )
}

export default EventUpdate