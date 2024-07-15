'use server';

import { prisma } from "@/utils/prisma";

import { safeParse } from 'valibot';
import { transportationScheduleSchema } from "@/types/form/validation";

export type ErrorType = {
  status: boolean;
  message: string;
}

export const Schedule = async (formData: FormData): Promise<ErrorType> => {
  // formDataから値を取得
  const driverId = formData.get('driverId')?.toString();
  const orderId = formData.get('OrderIdInput')?.toString();
  const temperature = formData.get('temperature')?.toString();
  const originFactoryId = formData.get('StartLocationInput')?.toString();
  const landingFactoryId = formData.get('EndLocationInput')?.toString();
  const startDatetime = formData.get('StartDateTimeInput')?.toString();
  const endDatetime = formData.get('EndDateTimeInput')?.toString();

  console.log(driverId,
    orderId,
    temperature,
    originFactoryId,
    landingFactoryId, startDatetime, endDatetime
  )

  const { success } = safeParse(transportationScheduleSchema, {
    temperature: temperature,
  });
  if (!success) {
    return { status: false, message: "入力フォーマットが違います" };
  }

  // 必須フィールドが全て存在するか確認
  if (!driverId || !orderId || !temperature || !originFactoryId || !landingFactoryId || !startDatetime || !endDatetime) {
    return {
      status: false,
      message: "入力されていない項目があります"
    };
  }

  console.log('asaaa');

  // データ型を整数に変換
  const parsedDriverId = parseInt(driverId);
  const parsedOrderId = parseInt(orderId);
  const parsedOriginFactoryId = parseInt(originFactoryId);
  const parsedLandingFactoryId = parseInt(landingFactoryId);

  // 新しいスケジュールを作成
  try {
    await prisma.scheduleList.create({
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
    return {
      status: true,
      message: ""
    }
  } catch (error) {
    console.error("Error creating schedule:", error);
    return {
      status: false,
      message: ""
    }
  }
};
