import type { FC } from "react";

import { Schedule } from './actions';
import Form from "./(components)/Form";
import DriverIdInput from "./(components)/DriverIdInput";
import OrderIdInput from "./(components)/OrderIdInput";
import TemperatureInput from "./(components)/TemperatureInput";
import StartLocationInput from "./(components)/StartLocationInput";
import StartDateTimeInput from "./(components)/StartDateTimeInput";
import EndLocationInput from "./(components)/EndLocationInput";
import EndDateTimeInput from "./(components)/EndDateTimeInput";
import SubmitInputBtn from "./(components)/SubmitInputBtn";

const ScheduleRegister: FC = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    const result = await Schedule(formData);
    return result;
  };

  return (
    <div className="min-h-screen w-full bg-red-100">
      <h1 className="flex justify-center items-center">ドライバースケジュール登録</h1>
      <div className="flex justify-center items-center">
        {/* <div className="grid grid-cols-2 gap-5"> */}
        <Form action={handleSubmit}>
          <div className="flex justify-center items-center gap-40 ">
            <div className="py-4">
              <label>ドライバーID</label>
              <DriverIdInput />
            </div>
            <div>
              <label>オーダーID</label>
              <OrderIdInput />
            </div>
          </div>

          <div className="flex justify-center items-center gap-40">
            <div className="py-4">
              <label>貨物内温度</label>
              <TemperatureInput />
            </div>
            <div>
              <label>出発地</label>
              <StartLocationInput />
            </div>
          </div>

          <div className="flex justify-center items-center gap-40">
            <div className="p-200 py-4">        
              <label>作業開始予定</label>
              <StartDateTimeInput />
            </div>
            
            <div>         
              <label>作業終了予定</label>
              <EndDateTimeInput />
            </div> 
            
          </div>

          <div className="flex justify-center items-center gap-80">
            <div className="py-4">         
              <label>到着地</label>
              <EndLocationInput />
            </div> 
            <div> 
              <SubmitInputBtn />
            </div> 
          </div> 
        </Form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ScheduleRegister;
