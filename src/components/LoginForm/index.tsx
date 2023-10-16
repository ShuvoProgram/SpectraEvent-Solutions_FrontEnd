'use client'
import { useLoginMutation } from '@/redux/api/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import { Button } from 'antd';
import { storeUserInfo } from '@/services/auth.service';

interface LoginFormInputs {
    email: string;
    password: string;
}

export default function LoginFrom() {
    const [showPass, setShowPass] = useState(false);
    const [login] = useLoginMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
        console.log(data);
        // try {
        //     const res = await login({ ...data }).unwrap();

        //     if (res?.accessToken) {
        //         router.push("/");
        //     }
        //     storeUserInfo({ accessToken: res?.accessToken });
        // } catch (error: any) {
        //     console.error(error.message);
        // }
    }
    return (
        <Form submitHandler={onSubmit}>
            <div className='mb-5'>
                <FormInput
                    name="email"
                    type="text"
                    size="large"
                    label="Email"
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
            <Button type='primary'
                htmlType='submit'
                danger
            >
                Login
            </Button>
        </Form>
    )
}
