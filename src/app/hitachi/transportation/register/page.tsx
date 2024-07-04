import type { FC } from 'react';
import { transportaion } from './actions';
import Form from './(components)/Form';

import LoginIdInput from './(components)/LoginIdInput';
import PasswordInput from './(components)/PasswordInput';
import UserNameInput from './(components)/UserNameInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';

const TransportaionRegister: FC = () => {
    const handleSubmit = async (formdata: FormData) => {
        'use server'

        return await transportaion(formdata);
    };

    return (
        <div className="min-h-screen">
            <Form action={handleSubmit}>
                <LoginIdInput />
                <PasswordInput />
                <UserNameInput />
                <SubmitInputBtn />
            </Form>
        </div>
    );
};

export default TransportaionRegister;