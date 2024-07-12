import { prisma } from "@/utils/prisma";
import { getTransportationUser } from '@/getters/user';

export type ErrorType = {
  status: boolean;
  message: string;
}

export const edit = async (formData: FormData, driverId: string): Promise<ErrorType> => {

  const employeeNum = formData.get('employeeNum')?.toString();
  const driverName = formData.get('driverName')?.toString();
  const driverTel = formData.get('driverTel')?.toString();
  const driverLicense = formData.get('driverLicense')?.toString();

  if (!employeeNum || !driverName || !driverTel || !driverLicense) {
    return {
      status: false,
      message: "入力フォーマットが違います"
    };
  }

  const parsedDriverId = parseInt(driverId);
  console.log(parsedDriverId);

  try {
    // const transportationDriver = 
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

    // if (!transportationDriver) {
    //   return {
    //     status: false,
    //     message: "追加に失敗しました"
    //   };
    // }

    return {
      status: true,
      message: ""
    };

  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "データベースエラーが発生しました"
    };
  }
}