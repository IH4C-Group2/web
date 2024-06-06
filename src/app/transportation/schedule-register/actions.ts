'use server';

import { prisma } from "@/utils/prisma";

export const SDL = async (formData: FormData) => {
  // formDataから値を取得
  const driverId = formData.get('DriverIdInput')?.toString();
  const orderId = formData.get('OrderIdInput')?.toString();
  const temperature = formData.get('TemperatureInput')?.toString();
  const originFactoryId = formData.get('StartLocationInput')?.toString();
  const landingFactoryId = formData.get('EndLocationInput')?.toString();
  const startDatetime = formData.get('StartDateTimeInput')?.toString();
  const endDatetime = formData.get('EndDateTimeInput')?.toString();


  // 必須フィールドが全て存在するか確認
  if (!driverId || !orderId || !temperature || !originFactoryId || !landingFactoryId || !startDatetime || !endDatetime) {
    return false;
  }

  // データ型を整数に変換
  const parsedDriverId = parseInt(driverId);
  const parsedOrderId = parseInt(orderId);
  const parsedOriginFactoryId = parseInt(originFactoryId);
  const parsedLandingFactoryId = parseInt(landingFactoryId);

  // 新しいスケジュールを作成
  try {
    const sdl = await prisma.scheduleList.create({
      data: {
        driverId: parsedDriverId,
        orderId: parsedOrderId,
        temperature,
        originFactoryId: parsedOriginFactoryId,
        landingFactoryId: parsedLandingFactoryId,
        startDatetime: new Date(startDatetime),
        endDatetime: new Date(endDatetime)
      }
    });


    // データ作成に成功した場合
    return true;
  } catch (error) {
    console.error("Error creating schedule:", error);
    return false;
  }
};