"use client";
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import FormTextArea from '@/components/Form/FormTextArea';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useCreateFaqMutation } from '@/redux/api/faqApi';
import { Button, Col, Row, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

function CreateFaq() {
    const [createFaq] = useCreateFaqMutation();
    const router = useRouter();
  
    const onSubmit = async (data: any) => {
      try {
        const res = await createFaq({ ...data}).unwrap();
        if (res) {
            message.success('Successfully Created FAQ')
            router.push("/admin/manage-faq");
        }
    } catch (error: any) {
        console.error(error.message);
    }
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
        Create FAQ
      </p>
      <Form submitHandler={onSubmit}>
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

export default CreateFaq