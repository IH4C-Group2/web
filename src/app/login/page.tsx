import type { FC } from 'react';

import { login } from './actions';
import Form from '@/app/layouts/LoginForm/DefaultForm';
import EmailInput from '@/app/layouts/LoginForm/EmailInput';
import PasswordInput from '@/app/layouts/LoginForm/PasswordInput';
import Header from './(components)/Header';
import LoginButton from '@/app/layouts/LoginForm/LoginButton';

const Login: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';

    return await login(formdata);
  };

  return (
    <div className=" min-h-screen">
      <Header />
      <div className="flex items-center justify-center">
      <Form action={handleSubmit}>
        <EmailInput />
        <PasswordInput />
        <LoginButton />
      </Form>
      </div>
    </div>
  );
};

export default Login;