import type { FC } from 'react';

import { login } from './actions';
import Form from './(components)/Form';
import IdInput from '@/app/layouts/LoginForm/IdInput';
import PasswordInput from '@/app/layouts/LoginForm//PasswordInput';

const Login: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';

    return await login(formdata);
  };

  return (
    <div className="min-h-screen">
      <h1>管理者用ログイン</h1>
      <Form action={handleSubmit}>
        ID:<IdInput />
        Pass:<PasswordInput />
        <button type="submit">ログイン</button>
      </Form>
    </div>
  );
};

export default Login;