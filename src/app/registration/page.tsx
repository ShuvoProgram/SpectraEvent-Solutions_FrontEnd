import RegistrationFrom from "@/components/RegistrationFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Registration`,
    description: 'Best Event Management Website',
}

const RegistrationPage = () => {

    return (
        <>
            <RegistrationFrom />
        </>
    )
}

export default RegistrationPage;