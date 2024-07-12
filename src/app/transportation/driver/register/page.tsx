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
    <div className="min-h-screen">
      <header>
        <h1>ドライバー登録画面</h1>
      </header>
      <div className="bg-white m-16"></div>

      <div className="bg-blue-900 flex justify-center items-center min-h-screen">
        <div  className="bg-gray-300  p-20">
          <Form action={handleSubmit}>
          <div className="flex justify-center items-center gap-40 ">
            <div className="py-4">
              <label>社員番号</label>
              <EmployeeNumInput />
            </div>
            <div>
              <label>名前</label>
              <DriverNameInput />
            </div>
          </div>
      
          <div className="flex  items-center gap-40">
            <div className="py-4">
              <label>電話番号</label>
              <DriverTelInput />
            </div>
            <div>
              <label>運転免許</label>
              <DriverLicenseInput />
            </div>
          </div>

          <div className="flex justify-center items-center gap-40">
            <div className="py-4">
              <label>ログインID</label>
              <LoginIdInput />
            </div>                  
            <div>
              <label>パスワード</label>
              <PasswordInput />
            </div>
          </div>
          <button type="submit" className="border border-black p-100 bg-white ">登録</button>
          </Form>
        </div>
    </div>
    </div>
  );
};

export default Register;