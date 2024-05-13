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
    <div className="min-h-screen">
      <h1>ログイン画面</h1>
      <Form action={handleSubmit}>
        <EmailInput />
        <PasswordInput />
        <button type="submit">ログイン</button>
      </Form>
    </div>
  );
};

export default Login;