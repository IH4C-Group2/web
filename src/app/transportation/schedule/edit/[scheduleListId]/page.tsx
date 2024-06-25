import type { FC } from 'react';

import { edit } from './actions';
import Form from './(components)/Form';
import DriverIdInput from './(components)/DriverIdInput';
import OrderIdInput from './(components)/OrderIdInput';
import TemperatureInput from './(components)/TemperatureInput';
import StartLocationInput from './(components)/OriginFactoryInput';
import StartDateTimeInput from './(components)/StartDateTimeInput';
import EndLocationInput from './(components)/landingFactoryInput';
import EndDateTimeInput from './(components)/EndDateTimeInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';
import { prisma } from '@/utils/prisma';

type Props = {
  params: { scheduleListId: string };
};

const UpdateSchedule: FC<Props> = async ({ params: { scheduleListId } }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    const res = await edit(formData, scheduleListId);
    console.log(res);
    return res;
  };

  const schedule = await prisma.scheduleList.findUnique({
    where: { scheduleListId: Number(scheduleListId) },
  });

  const factorys = await prisma.factoryInfo.findMany();

  return (
    <div className="min-h-screen">
      <h1>ドライバースケジュール更新</h1>
      {schedule ? (
        <>
          <p>スケジュールID: {scheduleListId}</p>
          <Form action={handleSubmit}>
            <DriverIdInput defaultDriverId={schedule.driverId} />
            <OrderIdInput defaultOrderId={schedule.orderId} />
            <TemperatureInput defaultTemperatureId={schedule.temperature} />
            <StartLocationInput factorys={factorys} />
            <StartDateTimeInput defaultStartDateTimeId={schedule.startDatetime} />
            <EndLocationInput factorys={factorys} />
            <EndDateTimeInput defaultEndDateTime={schedule.endDatetime}/>
            <SubmitInputBtn />
          </Form>
        </>
      ) : (
        <p>スケジュールIDが見つかりません。</p>
      )}
    </div>
  );
};

export default UpdateSchedule;
