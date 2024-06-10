'use server';

import { prisma } from "@/utils/prisma";

// ドライバー一覧を取得する関数
export const getAllDrivers = async () => {
  try {
    const drivers = await prisma.transportationDriver.findMany({
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