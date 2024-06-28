import type { FC } from 'react';

import { login } from './actions';
import Form from './(components)/Form';
import IdInput from '@/app/layouts/LoginForm/IdInput';
import PasswordInput from '@/app/layouts/LoginForm/PasswordInput';
import LoginButton from '@/app/layouts/LoginForm/LoginButton';

const Login: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';

    return await login(formdata);
  };

  return (
    <div className="min-h-screen">
      <div className="w-full py-4 bg-blue-900">
      <h1 className='text-white text-2xl flex justify-center items-center'>ログイン画面</h1>
      </div>
      <Form action={handleSubmit}>

    <div className='mt-32'>

    <p className='ml-80 mb-2 font-semibold'>管理者ID</p>
        <div className="mx-20 mb-32 flex justify-center">
          <IdInput />
        </div>

        <p className='ml-80 mb-2 font-semibold'>パスワード</p>
        <div className="mx-20 mb-32 flex justify-center">
          <PasswordInput />
        </div>

      </div>

        <div className='flex justify-center'>
          <LoginButton />
        </div>

      </Form>
    </div>
  );
};

export default Login;