import type { FC } from 'react';

import { edit } from './actions';
import Form from './(components)/Form';
import DriverInput from './(components)/DriverInput';
import OrderIdInput from './(components)/OrderIdInput';
import TemperatureInput from './(components)/TemperatureInput';
import StartLocationInput from './(components)/OriginFactoryInput';
import StartDateTimeInput from './(components)/StartDateTimeInput';
import EndLocationInput from './(components)/landingFactoryInput';
import EndDateTimeInput from './(components)/EndDateTimeInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';
import { prisma } from '@/utils/prisma';
import { getTransportationUser } from '@/getters/user';

type Props = {
  params: { scheduleListId: string };
};

const UpdateSchedule: FC<Props> = async ({ params: { scheduleListId } }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    return await edit(formData, scheduleListId);
  };

  const user = await getTransportationUser();
  const schedule = await prisma.scheduleList.findUnique({
    where: { scheduleListId: Number(scheduleListId) },
  });
  const factorys = await prisma.factoryInfo.findMany();
  const drivers = await prisma.transportationDriver.findMany({
    where: {
      transportationUserId: user?.transportationUserId
    }
  });

  return (
    <div className="min-h-screen">
      <h1>ドライバースケジュール更新</h1>
      {schedule ? (
        <>
          <p>スケジュールID: {scheduleListId}</p>
          <Form action={handleSubmit}>
            <DriverInput defaultDriverId={schedule.driverId} drivers={drivers} />
            <OrderIdInput defaultOrderId={schedule.orderId} />
            <TemperatureInput defaultTemperatureId={schedule.temperature} />
            <StartLocationInput defaultStartLocation={schedule.originFactoryId} factorys={factorys} />
            <StartDateTimeInput defaultStartDateTimeId={schedule.startDatetime} />
            <EndLocationInput defaultEndLocation={schedule.landingFactoryId} factorys={factorys} />
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
