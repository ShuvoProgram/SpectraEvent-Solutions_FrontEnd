'use client'
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormTextArea from '@/components/Form/FormTextArea';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useGetSingleFaqQuery, useUpdateFaqMutation } from '@/redux/api/faqApi'
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

type IDProps = {
    id: string;
  };

function UpdateFaq({id}: IDProps) {
  const router = useRouter();
    const {data: faqData} = useGetSingleFaqQuery(id);
    const [updateFaq] = useUpdateFaqMutation();
    const onSubmit = async (values: any) => {
        try {
          const res = await updateFaq({...values, id}).unwrap();
            if(res?.id) {
              message.success("FAQ Successfully Updated!");
              router.push('/admin/manage-faq')
            }
        } catch (error: any) {
            message.error(error.message)
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
    <BreadCrumb
      
      items={[
        {
          label: "admin",
          link: "/admin",
        },
      ]}
    />
    <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
      Update FAQ
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
        Update FAQ
      </Button>
    </Form>
  </div>
  )
}

export default UpdateFaq