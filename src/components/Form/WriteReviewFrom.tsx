"use client";
import React from 'react'
import FormTextArea from './FormTextArea'
import Form from './Form';
import { Button, Col, Rate, Row } from 'antd';

function WriteReviewFrom() {
    const [value, setValue] = React.useState(0);
    const handleReview = ({ values }: any) => {
        console.log(values)
    }
    return (
        <div>
            <div className="w-full px-3 my-2">
                <Form submitHandler={handleReview}>
                    <Row>
                        <Col style={{
                            display: 'flex',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            margin: "10px 0px"
                        }}>
                        <h3 className='mr-4 font-serif'>Rating:</h3>
                        <Rate value={value} onHoverChange={() => setValue(value)}/>
                        </Col>
                        <Col md={24}>
                            <FormTextArea
                                name='review'
                                placeholder='Write a Review'
                                rows={6}
                            />
                        </Col>
                        <Col md={24}>
                            <Button type='primary' htmlType='submit'
                                style={{
                                    margin: "10px 0px",
                                    backgroundColor: "#FF5B22"
                                }}
                            >Post Review</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default WriteReviewFrom