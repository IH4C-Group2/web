import type { FC } from 'react';
import { transportaion } from './actions';
import Form from './(components)/Form';

import LoginIdInput from './(components)/LoginIdInput';
import PasswordInput from './(components)/PasswordInput';
import UserNameInput from './(components)/UserNameInput';
import OfficeTELInput from './(components)/OfficeTELInput';
import ResponsibleNameInput from './(components)/ResponsibleNameInput';
import AddressInput from './(components)/AddressInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';

const TransportaionRegister: FC = () => {
    const handleSubmit = async (formdata: FormData) => {
        'use server'

        return await transportaion(formdata);
    };

    return (
        <div className="min-h-screen">
            <header>
            <h1 className="flex justify-center items-center">運送会社新規登録</h1>
            </header>
            <div className="bg-white m-16"></div>

            <div className="bg-blue-900 flex justify-center items-center min-h-screen">
                <div  className="bg-gray-300  p-20">
                    <Form action={handleSubmit}>
                    <div className="flex justify-center items-center gap-40 ">
                        <div className="py-4">
                            <label>ドライバーID</label>
                            <LoginIdInput />
                        </div>
                    
                    <div>
                        <label>パスワードID</label>
                        <PasswordInput />
                    </div>
                    </div>

                    <div className="flex justify-center items-center gap-40">
                        <div className="py-4">
                            <label>ユーザー名</label>
                            <UserNameInput />
                        </div>
                        <div>
                            <label>住所</label>
                            <AddressInput />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-40">
                        <div className="py-4">
                            <label>事務所TEL</label>
                            <OfficeTELInput />
                        </div>
                        <div>
                            <label>責任者</label>
                            <ResponsibleNameInput />
                        </div>
                    </div>
                
                <SubmitInputBtn />
            </Form>
            </div>
            </div>
        </div>
    );
};

export default TransportaionRegister;