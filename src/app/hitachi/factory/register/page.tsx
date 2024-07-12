import type { FC } from 'react';

import Link from 'next/link';

import { factoryRegister } from './actions';
import Form from './(components)/Form';
//factoryUser
import LoginIdInput from './(components)/LoginIdInput';
import PasswordInput from './(components)/PasswordInput';
import FactoryNameInput from './(components)/FactoryNameInput';
//factoryInfo
import FactoryDetailNameInput from './(components)/FactoryDetailNameInput';
import AddressInput from './(components)/AddressInput';
import ResponsibleNameInput from './(components)/ResponsibleNameInput';
import ResponsibleTELInput from './(components)/ResponsibleTELInput';
import OfficeTELInput from './(components)/OfficeTELInput';

const FactoryRegister: FC = () => {
    const handleSubmit = async (formdata: FormData) => {
        'use server'

        return await factoryRegister(formdata);
    };

    return (
        <div className="min-h-screen">
            <header>
                <h1>工場新規登録</h1>
            </header>
            <div className="bg-white m-16"></div>

            <div className="bg-blue-900 flex justify-center items-center min-h-screen">
                
                <div  className="bg-gray-300  p-20">
                <Link href={'/hitachi/factory/list'}>工場一覧に戻る</Link>
                <Form action={handleSubmit}>
                    <div className="flex justify-center items-center gap-40 ">
                        <div className="py-4">
                            <label> ログインID</label>
                            <LoginIdInput />
                        </div>
                        <div>
                            <label>パスワード</label>
                            <PasswordInput />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-40">
                        <div className="py-4">
                            <label>会社名</label>
                            <FactoryNameInput />
                        </div>
                        <div>
                            <label>工場名</label>
                            <FactoryDetailNameInput />
                        </div>
                    </div>
                
                    <div className="flex justify-center items-center gap-40">
                        <div className="py-4">
                            <label>住所</label>
                            <AddressInput />
                        </div>
                        <div>
                            <label>責任者</label>
                            <ResponsibleNameInput />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-40">
                        <div className="py-4">
                            <label>責任者TEL</label>
                            <ResponsibleTELInput />
                        </div>
                        <div>
                            <label>事務所TEL</label>
                            <OfficeTELInput />
                        </div>
                    </div>
                    <button type="submit" className="border border-black p-100 bg-white">登録</button>
            </Form>
            </div>
        </div>
        </div>
    );
};

export default FactoryRegister;