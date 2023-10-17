import LoginFrom from '@/components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Login`,
    description: 'Best Event Management Website',
}

export default function Login() {
    return (
        <>
            <LoginFrom />
        </>
    )
}
