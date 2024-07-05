import type { FC } from 'react';

import { getTransportationDriver } from '@/getters/user';

import MyCalendar from './(components)/Calendar';
import { notFound } from 'next/navigation';
import { prisma } from '@/utils/prisma';

const Schedule: FC = async () => {
  const user = await getTransportationDriver();

  if (!user) notFound();

  const schedules = await prisma.scheduleList.findMany({
    where: {
      driverId: user.driverId
    },
    select: {
      scheduleListId: true,
      originFactory: {
        select: {
          factoryDetailName: true
        }
      },
      landingFactory: {
        select: {
          factoryDetailName: true
        }
      },
      startDatetime: true,
      endDatetime: true
    }
  });

  const formattedSchedules = schedules.map(schedule => ({
    id: schedule.scheduleListId,
    title: `${schedule.originFactory.factoryDetailName} から ${schedule.landingFactory.factoryDetailName}`,
    start: new Date(schedule.startDatetime),
    end: new Date(schedule.endDatetime)
  }));

  return (
    <div>
      <MyCalendar schedules={formattedSchedules} />
    </div>
  );
};

export default Schedule;
