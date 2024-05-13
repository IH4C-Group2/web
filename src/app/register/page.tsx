import type { FC } from 'react';

import { register } from './actions';
import Form from './(components)/Form';
import NameInput from './(components)/NameInput';
import EmailInput from './(components)/EmailInput';
import PasswordInput from './(components)/PasswordInput';
import ConfirmPasswordInput from './(components)/ConfirmPasswordInput';

const Register: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';
    
    return await register(formdata);
  };

  return (
    <div className="min-h-screen">
      <h1>登録画面</h1>
      <Form action={handleSubmit}>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <button type="submit">登録</button>
      </Form>
    </div>
  );
};

export default Register;