import type { FC } from "react";

import { SDL } from './actions';
import Form from "./(components)/Form";
import DriverIdInput from "./(components)/DriverIdInput";
import OrderIdInput from "./(components)/OrderIdInput";
import TemperatureInput from "./(components)/TemperatureInput";
import StartLocationInput from "./(components)/StartLocationInput";
import StartDateTimeInput from "./(components)/StartDateTimeInput";
import EndLocationInput from "./(components)/EndLocationInput";
import EndDateTimeInput from "./(components)/EndDateTimeInput";
import SubmitInputBtn from "./(components)/SubmitInputBtn";

const SdlRegister: FC = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    const result = await SDL(formData);
    return result;
  };

  return (
    <div className="min-h-screen">
      <h1>ドライバースケジュール登録</h1>
      <Form action={handleSubmit}>
        <DriverIdInput />
        <OrderIdInput />
        <TemperatureInput />
        <StartLocationInput />
        <StartDateTimeInput />
        <EndLocationInput />
        <EndDateTimeInput />
        <SubmitInputBtn />
      </Form>
    </div>
  );
};

export default SdlRegister;
