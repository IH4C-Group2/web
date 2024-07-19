import type { FC } from 'react';

import { login } from './actions';
import Form from './(components)/Form';
import PasswordInput from './(components)/PasswordInput';

const Login: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';
    
    return await login(formdata);
  };

  return (
    <div className="min-h-screen">
      <h1>パスワードジェネレータ</h1>
      <Form action={handleSubmit}>
        <PasswordInput />
        <button type="submit">生成する</button>
      </Form>
    </div>
  );
};

export default Login;