"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import { useGetSingleVanueQuery, useUpdateVanueMutation } from '@/redux/api/vanueApi';
import { Button, Col, Row, message } from 'antd';
import React from 'react'

type IDProps = {
    id: string;
  };

function UpdateVanue({id}: IDProps) {
    const {data: VanueData, isLoading} = useGetSingleVanueQuery(id);
   
    const [updateVanue] = useUpdateVanueMutation();

    if(isLoading) {
        return <Spinner/>
    }

    const onSubmit = async (values: any) => {
        try {
          const res = await updateVanue({...values}).unwrap();
            if(res?.id) {
              message.success("Vanue Successfully Updated!");
            }
        } catch (error: any) {
            console.error(error.message)
        }
    };
    const defaultValue = {
    title: VanueData?.title || "",
    }
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
          label: "admin",
          link: "/admin",
        },
      ]}
    />
    <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
    Update Vanue
    </p>
    <Form submitHandler={onSubmit} defaultValues={defaultValue}>
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={24} style={{ margin: "10px 0" }}>
          <FormInput
            name='title'
            type='text'
            size='large'
            label='Vanue Title'
            required
          />
        </Col>
      </Row>
      <Button type="primary" danger htmlType="submit">
        Update Vanue
      </Button>
    </Form>
    </div>
  )
}

export default UpdateVanue