import type { FC } from 'react';

import { register } from './actions';
import Form from './(components)/Form';

import EmployeeNumInput from './(components)/EmployeeNumInput';
import DriverNameInput from './(components)/DriverNameInput';
import DriverTelInput from './(components)/DriverTelInput';
import DriverLicenseInput from './(components)/DriverLicenseInput';
import LoginIdInput from './(components)/LoginIdInput';
import PasswordInput from './(components)/PasswordInput';

const Register: FC = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';

    return await register(formdata);
  };

  return (
    <div>
      <header>
        <h1>ドライバー登録画面</h1>
      </header>
      <Form action={handleSubmit}>
        社員番号:<EmployeeNumInput />
        名前:<DriverNameInput />
        電話番号:<DriverTelInput />
        運転免許:<DriverLicenseInput />
        ログインID:<LoginIdInput />
        パスワード:<PasswordInput />
        <button type="submit">登録</button>
      </Form>
    </div>
  );
};

export default Register;