'use server';

import { prisma } from "@/utils/prisma";
import { getTransportationUser } from '@/getters/user';

// ドライバー一覧を取得する関数
export const getAllDrivers = async () => {
  const transportationUser = await getTransportationUser();
  try {
    const drivers = await prisma.transportationDriver.findMany({
      where: { transportationUserId: transportationUser?.transportationUserId },
      select: {
        drivertId: true,
        employeeNum: true,
        driverName: true,
        driverTel: true,
        driverLicense: true
      }
    });
    return drivers.map(driver => ({
      driverId: driver.drivertId,
      employeeNum: driver.employeeNum,
      driverName: driver.driverName,
      driverTel: driver.driverTel,
      driverLicense: driver.driverLicense
    }));
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw error; // エラーを再度投げることで、page.tsxでキャッチできるようにする
  }
};

// ドライバーを削除する関数
export const deleteDriver = async (driverId: number) => {
  try {
    await prisma.transportationDriver.delete({
      where: { drivertId: driverId },
    });
  } catch (error) {
    console.error('Error deleting driver:', error);
    throw error;
  }
};