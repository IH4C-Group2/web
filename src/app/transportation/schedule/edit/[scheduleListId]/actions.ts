import { revalidatePath } from 'next/cache';

import { prisma } from "@/utils/prisma";

import { safeParse } from 'valibot';
import { transportationScheduleSchema } from "@/types/form/validation";

export type ErrorType = {
  status: boolean;
  message: string;
}

export const edit = async (formData: FormData, scheduleListId: string): Promise<ErrorType> => {
  // formDataから値を取得
  const driverId = formData.get('driverId')?.toString();
  const orderId = formData.get('orderId')?.toString();
  const temperature = formData.get('temperature')?.toString();
  const originFactoryId = formData.get('originFactory')?.toString();
  const landingFactoryId = formData.get('landingFactory')?.toString();
  const startDatetime = formData.get('startDatetime')?.toString();
  const endDatetime = formData.get('endDatetime')?.toString();

  const { success } = safeParse(transportationScheduleSchema, {
    temperature: temperature,
  });
  if (!success) {
    return { status: false, message: "入力フォーマットが違います" };
  }

  // 必須フィールドが全て存在するか確認
  if (!driverId || !orderId || !temperature || !originFactoryId || !landingFactoryId || !startDatetime || !endDatetime || !scheduleListId) {
    return {
      status: false,
      message: "入力フォーマットが違いますyo"
    };
  }

  // データ型を整数に変換
  const parsedDriverId = parseInt(driverId);
  const parsedOrderId = parseInt(orderId);
  const parsedOriginFactoryId = parseInt(originFactoryId);
  const parsedLandingFactoryId = parseInt(landingFactoryId);
  const parsedScheduleListId = parseInt(scheduleListId);

  // スケジュールを更新
  try {
    await prisma.scheduleList.update({
      where: {
        scheduleListId: parsedScheduleListId,
      },
      data: {
        driver: {
          connect: {
            driverId: parsedDriverId,
          }
        },
        orderId: parsedOrderId,
        temperature,
        originFactory: {
          connect: {
            factoryInfoId: parsedOriginFactoryId,
          }
        },
        landingFactory: {
          connect: {
            factoryInfoId: parsedLandingFactoryId,
          }
        },
        startDatetime: new Date(startDatetime),
        endDatetime: new Date(endDatetime),
      },
    });

    revalidatePath(`/transportation/schedule/list/`, 'layout');
    return {
      status: true,
      message: ""
    };
  } catch (error) {
    console.error("Error updating schedule:", error);
    return {
      status: false,
      message: "データベースエラーが発生しました"
    };
  }
};
