import { prisma } from "@/utils/prisma";

import { revalidatePath } from 'next/cache';
import { safeParse } from 'valibot';
import { transportationDriverEditSchema } from "@/types/form/validation";

export type ErrorType = {
  status: boolean;
  message: string;
}

export const edit = async (formData: FormData, driverId: string): Promise<ErrorType> => {

  const employeeNum = formData.get('employeeNum')?.toString();
  const driverName = formData.get('driverName')?.toString();
  const driverTel = formData.get('driverTel')?.toString();
  const driverLicense = formData.get('driverLicense')?.toString();

  const { success } = safeParse(transportationDriverEditSchema, {
    employeeNum: employeeNum,
    driverName: driverName,
    driverTel: driverTel
  });
  console.log(employeeNum, driverName, driverTel)
  if (!success) {
    return { status: false, message: "入力フォーマットが違います" };
  }

  if (!employeeNum || !driverName || !driverTel || !driverLicense) {
    return {
      status: false,
      message: "入力されていない項目があります"
    };
  }

  const parsedDriverId = parseInt(driverId);
  console.log(parsedDriverId);

  try {
    await prisma.transportationDriver.update({
      where: {
        driverId: parsedDriverId,
      },
      data: {
        driverName,
        driverTel,
        employeeNum: employeeNum,
        driverLicense,
      }
    });

    revalidatePath(`/transportation/driver/list/`, 'layout');
    return {
      status: true,
      message: ""
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "データベースエラーが発生しました"
    };
  }
}