import { Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import registraImg from '../../../public/images/signup.png'
import Image from 'next/image'
import Form from '@/components/Form/Form';
import { SubmitHandler } from 'react-hook-form';
import FormInput from '@/components/Form/FormInput';
import { useRouter } from 'next/navigation';
import { storeUserInfo } from '@/services/auth.service';
import { useUserRegisterMutation } from '@/redux/api/authApi';

interface RegisterFormInputs {
    email: string;
    password: string;
}


export default function RegistrationFrom() {
    const [userRegister] = useUserRegisterMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data: any) => {
        console.log(data);
        try {
            const res = await userRegister({ ...data }).unwrap();

            if (res?.accessToken) {
                router.push("/");
            }
            storeUserInfo({ accessToken: res?.accessToken });
        } catch (error: any) {
            console.error(error.message);
        }
    }
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh"
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={registraImg} width={500} alt='registration' />
            </Col>
            <Col sm={12} md={16} lg={10}>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput
                                name='email'
                                type='text'
                                size='large'
                                label='Email'
                                required
                            />
                        </div>
                        <div
                            style={{
                                margin: "15px 0px"
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                                required
                            />
                        </div>
                        <Button type="primary" danger htmlType="submit">
                            Registration
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}