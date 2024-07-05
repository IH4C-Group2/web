import type { FC } from 'react';

import { prisma } from '@/utils/prisma';

import { Schedule } from './actions';
import Form from './(components)/Form';
import DriverInput from './(components)/DriverInput';
import OrderIdInput from './(components)/OrderIdInput';
import TemperatureInput from './(components)/TemperatureInput';
import StartLocationInput from './(components)/StartLocationInput';
import StartDateTimeInput from './(components)/StartDateTimeInput';
import EndLocationInput from './(components)/EndLocationInput';
import EndDateTimeInput from './(components)/EndDateTimeInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';

import { getTransportationUser } from '@/getters/user';

const ScheduleRegister: FC = async () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    const result = await Schedule(formData);
    return result;
  };

  // const user = await getTransportationUser();
  // const factorys = await prisma.factoryInfo.findMany();
  // const drivers = await prisma.transportationDriver.findMany({
  //   where: {
  //     transportationUserId: user?.transportationUserId
  //   }
  // });

  return (
    <div className="">
      <header>
      <h1 className="flex justify-center items-center">ドライバースケジュール登録</h1>
      </header>
      <div className="bg-white m-16">

      </div>
      <div className="">
        <div className="bg-blue-900 flex justify-center items-center min-h-screen">
          <div className="bg-gray-300  p-20">
          <Form action={handleSubmit}>
            <div className="flex justify-center items-center gap-40 ">
              <div className="py-4">
                <label>ドライバーID</label>
                <DriverInput drivers={drivers} />
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
                <StartLocationInput factorys={factorys} />
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
                <EndLocationInput factorys={factorys} />
              </div>
              <div>
                <SubmitInputBtn />
              </div>
            </div>
          </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleRegister;
