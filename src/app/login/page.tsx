import Image from 'next/image';
import React from 'react';
import loginImg from '../../../public/images/login.gif';
import LoginFrom from '@/components/LoginForm';
import { Col, Row } from 'antd';

export default function Login() {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh"
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={loginImg} width={400} height={400} alt='login' />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1
                    style={{
                        margin: "15px 0px"
                    }}
                >Login Your Account</h1>
                <div>
                    <LoginFrom />
                </div>
            </Col>
        </Row>
    )
}
