"use client";
import React, { useState } from 'react';
import FormTextArea from './FormTextArea';
import Form from './Form';
import { Button, Col, Rate, Row, message } from 'antd';
import { useCreateReviewMutation } from '@/redux/api/reviewApi';

function WriteReviewForm({id}: any) {
  const [value, setValue] = useState(0);
  const [createReview] = useCreateReviewMutation();

  const handleReview = async (values: any) => {
    const data = {
        rating: value,
        comment: values.review,
        eventId: id
    }
    try {
      message.loading("...Review")
        const res = await createReview(data).unwrap();
        if(res.id){
            message.success("Review created successfully!");
        } else {
          message.error("Review created Unsuccessfully!");
        }
      } catch (err: any) {
          message.error(err.message);
      }
  };

  return (
    <div>
      <div className="w-full px-3 my-2">
        <Form submitHandler={handleReview}>
          <Row>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '10px 0px',
              }}
            >
              <h3 className="mr-4 font-serif">Rating:</h3>
              <Rate onChange={setValue} value={value} />
            </Col>
            <Col md={24}>
              <FormTextArea
                name="review"
                placeholder="Write a Review"
                rows={6}
              />
            </Col>
            <Col md={24}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  margin: '10px 0px',
                  backgroundColor: '#FF5B22',
                }}
              >
                Post Review
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default WriteReviewForm;
