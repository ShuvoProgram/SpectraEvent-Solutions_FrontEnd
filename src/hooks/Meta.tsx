import Head from 'next/head'
import React from 'react'

interface IMeta {
    title: string;
    description: string;
}

export default function Meta({ title, description }: IMeta) {
    return (
        <Head>
            <title>SpectraEvent-Solutions | {title}</title>
            <meta charSet='utf-8' />
            <meta
                name='description'
                content={`SpectraEvent-Solutions | ${description}`}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="https://i.ibb.co/mySk1YY/logo-removebg-preview-modified.png" />
        </Head>
    )
}
