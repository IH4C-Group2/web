import { prisma } from "@/utils/prisma";

export const schedule = async (formData: FormData, scheduleListId: string) => {
  // formDataから値を取得
  const driverId = formData.get('driverId')?.toString();
  const orderId = formData.get('orderId')?.toString();
  const temperature = formData.get('temperature')?.toString();
  const originFactoryId = formData.get('originFactoryId')?.toString();
  const landingFactoryId = formData.get('landingFactoryId')?.toString();
  const startDatetime = formData.get('startDatetime')?.toString();
  const endDatetime = formData.get('endDatetime')?.toString();
  //const scheduleListId = formData.get('scheduleListId')?.toString();

  // 必須フィールドが全て存在するか確認
  if (!driverId || !orderId || !temperature || !originFactoryId || !landingFactoryId || !startDatetime || !endDatetime || !scheduleListId) {
    return false;
  }

  // データ型を整数に変換
  const parsedDriverId = parseInt(driverId);
  const parsedOrderId = parseInt(orderId);
  const parsedOriginFactoryId = parseInt(originFactoryId);
  const parsedLandingFactoryId = parseInt(landingFactoryId);
  const parsedScheduleListId = parseInt(scheduleListId);

  // スケジュールを更新
  try {
    const updatedSchedule = await prisma.scheduleList.update({
      where: {
        scheduleListId: parsedScheduleListId,
      },
      data: {
        driverId: parsedDriverId,
        orderId: parsedOrderId,
        temperature,
        originFactoryId: parsedOriginFactoryId,
        landingFactoryId: parsedLandingFactoryId,
        startDatetime: new Date(startDatetime),
        endDatetime: new Date(endDatetime),
      },
    });

    return true; // 更新成功
  } catch (error) {
    console.error("Error updating schedule:", error);
    return false; // 更新失敗
  }
};
