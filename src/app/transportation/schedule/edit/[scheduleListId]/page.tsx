import type { FC } from 'react';

import { schedule } from './actions';
import Form from './(components)/Form';
import DriverIdInput from './(components)/DriverIdInput';
import OrderIdInput from './(components)/OrderIdInput';
import TemperatureInput from './(components)/TemperatureInput';
import StartLocationInput from './(components)/StartLocationInput';
import StartDateTimeInput from './(components)/StartDateTimeInput';
import EndLocationInput from './(components)/EndLocationInput';
import EndDateTimeInput from './(components)/EndDateTimeInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';
import { prisma } from '@/utils/prisma';

type Props = {
  params: { scheduleListId: string };
};

const UpdateSchedule: FC<Props> = async ({ params: { scheduleListId } }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    return await schedule(formData, scheduleListId);
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
            <EndLocationInput />
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
