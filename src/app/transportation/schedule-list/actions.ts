'use server';

import { PrismaClient } from '@prisma/client';

// Prismaのログを有効化して初期化
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

// ドライバースケジュールを取得し、DriverSchedule型に変換する関数
export const getAllDriverSchedules = async () => {
  try {
    const schedules = await prisma.scheduleList.findMany();
    return schedules.map(schedule => ({
      id: schedule.scheduleListId,
      scheduleListId: schedule.scheduleListId, // 追加: scheduleListId
      driverId: schedule.driverId.toString(),
      orderId: schedule.orderId.toString(),
      temperature: schedule.temperature,
      startLocation: schedule.originFactoryId.toString(),
      startDateTime: schedule.startDatetime.toISOString(),
      endLocation: schedule.landingFactoryId.toString(),
      endDateTime: schedule.endDatetime.toISOString()
    }));
  } catch (error) {
    console.error('Error fetching driver schedules:', error);
    throw error; // エラーを再度投げることで、page.tsxでキャッチできるようにする
  }
};