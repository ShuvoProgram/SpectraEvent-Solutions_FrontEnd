import { NextApiRequest, NextApiResponse } from 'next';
import { contactFormEmail } from '@/email/contactForm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, messages } = req.body;

    try {
       await contactFormEmail(name, email, messages);
        res.status(200).json({
            message: 'Email sent successfully.',
        });
    } catch (e: any) {
        res.status(400).json({
            error_code: 'get_funfacts',
            message: e.message,
        });
    }
}
