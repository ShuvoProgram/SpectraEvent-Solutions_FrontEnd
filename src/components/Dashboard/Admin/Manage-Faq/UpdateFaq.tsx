'use client'
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormTextArea from '@/components/Form/FormTextArea';
import { useGetSingleFaqQuery, useUpdateFaqMutation } from '@/redux/api/faqApi'
import { Button, Col, Row, message } from 'antd';
import React from 'react';

type IDProps = {
    id: string;
  };

function UpdateFaq({id}: IDProps) {
    const {data: faqData, isLoading} = useGetSingleFaqQuery(id);
    const [updateFaq] = useUpdateFaqMutation();
    const onSubmit = async (values: any) => {
        try {
          const res = await updateFaq({...values}).unwrap();
            if(res?.id) {
              message.success("FAQ Successfully Updated!");
            }
        } catch (error: any) {
            console.error(error.message)
        }
    };
    const defaultValue = {
        question: faqData?.question || "",
        answer: faqData?.answer || ""
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
    <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
      Create FAQ
    </p>
    <Form submitHandler={onSubmit} defaultValues={defaultValue}>
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={24} style={{ margin: "10px 0" }}>
          <FormInput
            name='question'
            type='text'
            size='large'
            label='Question'
            required
          />
        </Col>
        <Col span={24} style={{ margin: "10px 0" }}>
          <FormTextArea
            name='answer'
            label='Answer'
            rows={4}
          />
        </Col>
      </Row>
      <Button type="primary" danger htmlType="submit">
        Add FAQ
      </Button>
    </Form>
  </div>
  )
}

export default UpdateFaq