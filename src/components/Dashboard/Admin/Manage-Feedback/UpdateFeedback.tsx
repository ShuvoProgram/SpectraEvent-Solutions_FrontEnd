"use client";
import Form from '@/components/Form/Form';
import FormSelectField, { SelectOptions } from '@/components/Form/FormSelectedField';
import Spinner from '@/components/Loading/Spinner';
import BreadCrumb from '@/components/shared/BreadCrumb'
import { useGetSingleFeedbackQuery, useUpdateFeedbackMutation } from '@/redux/api/feedbackApi';
import { IDProps, isConfirm } from '@/types';
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

function UpdateFeedback({params}: IDProps) {
  const {id} = params;
  const router = useRouter();
  const {data, isLoading} = useGetSingleFeedbackQuery(id);
  const [updateFeedback] = useUpdateFeedbackMutation();
  if(isLoading) {
    return <Spinner/>
  }
  const confirmOption = isConfirm.map((Or: {label: any, value: any}) => {
    return {
        label: Or?.label,
        value: Or?.value
    }
})

  const onSubmit = async (values: any) => {
    message.loading("Updating...");
    try {
     const res = await updateFeedback({...values, id}).unwrap();
     if(res?.id){
         message.success("Feedback Published successfully!");
         router.push('/admin/manage-feedback')
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
                    { label: "manage-feedback", link: `/${base}/manage-feedback` },
                ]}
            />
            <h1>Create Event</h1>
            <Form submitHandler={onSubmit}>
                <Row>
                    
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                       <Row>
                        <Col sm={24} md={24} lg={24} style={{margin: "10px 0px"}}>
                        Name: {data?.name}
                        </Col>
                        <Col sm={24} md={24} lg={24} style={{margin: "10px 0px"}}>
                        Email: {data?.email}
                        </Col>
                        <Col sm={24} md={24} lg={24} style={{margin: "10px 0px"}}>
                        Message: {data?.message}
                        </Col>
                        <Col sm={24} md={24} lg={24} style={{margin: "10px 0px"}}>
                        is Published: {data?.isPublished === true ? (
                          <strong style={{ color: "green" }}>Published</strong>
                        ) : (
                          <strong style={{ color: "orange" }}>UnPublished</strong>
                        )}
                        </Col>
                       </Row>
                    </Col>
                    <Col xs={24} sm={10} md={16} lg={10} style={{ margin: "10px 10px" }}>
                    <FormSelectField
                            name="isPublished"
                            label="isPublished"
                            size='large'
                            options={confirmOption as SelectOptions[]}
                            placeholder='Select'
                        />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" danger>
                    Update Feedback
                </Button>
            </Form>
        </div>
  )
}

export default UpdateFeedback