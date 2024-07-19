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
      <Link href={'/hitachi/factory/list'}>工場一覧に戻る</Link>
      <Form action={handleSubmit}>
        <LoginIdInput />
        <PasswordInput />
        <FactoryNameInput />
        <FactoryDetailNameInput />
        <AddressInput />
        <ResponsibleNameInput />
        <ResponsibleTELInput />
        <OfficeTELInput />
        <button type="submit">登録</button>
      </Form>
    </div>
  );
};

export default FactoryRegister;