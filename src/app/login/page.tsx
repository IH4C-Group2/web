import type { FC } from 'react';

import { login } from './actions';
import Form from './(components)/Form';
import EmailInput from './(components)/EmailInput';
import PasswordInput from './(components)/PasswordInput';

const Login: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';
    
    return await login(formdata);
  };

  return (
    <div className=" min-h-screen">
      <h1 className="text-2xl font-bold text-center bg-blue-900 text-white p-4 rounded-t-lg">管理者用ログイン</h1>
      <div className="flex items-center justify-center">
      <Form action={handleSubmit}>
        <EmailInput />
        <PasswordInput />
        <button type="submit" className="font-bold py-2 px-4 bg-sky-500 text-white">ログイン</button>
      </Form>
      </div>
    </div>
  );
};

export default Login;