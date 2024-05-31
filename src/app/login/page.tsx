import type { FC } from 'react';

import { login } from './actions';
import Form from './(components)/Form';
import EmailInput from './(components)/EmailInput';
import PasswordInput from './(components)/PasswordInput';
import Header from './(components)/Header';
import LoginButton from './(components)/LoginButton';

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