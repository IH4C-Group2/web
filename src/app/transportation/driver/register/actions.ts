'use server';

import { prisma } from "@/utils/prisma";
import { getTransportationUser } from '@/getters/user';

export type ErrorType = {
  status: boolean;
  message: string;
}

export const register = async (formData: FormData): Promise<Array<ErrorType>> => {
  const errors: ErrorType[] = [];
  const transportationUser = await getTransportationUser();
  const employeeNum = formData.get('employeeNum')?.toString();
  const driverName = formData.get('driverName')?.toString();
  const driverTel = formData.get('driverTel')?.toString();
  const driverLicense = formData.get('driverLicense')?.toString();
  const loginId = formData.get('loginId')?.toString();
  const password = formData.get('password')?.toString();

  if (!employeeNum || !driverName || !driverTel || !driverLicense || !loginId || !password) {
    errors.push({
      status: false,
      message: "入力フォーマットが違います"
    });
    return errors;
  }

  const existingLogins = await prisma.transportationDriver.findMany({
    select: { loginId: true }
  });

  for (const existingLogin of existingLogins) {
    if (existingLogin.loginId === loginId) {
      errors.push({
        status: false,
        message: "このIDはすでに存在します"
      });
      return errors;
    }
  }

  try {
    const transportationDriver = await prisma.transportationDriver.create({
      data: {
        driverName,
        driverTel,
        employeeNum,
        driverLicense,
        transportationUserId: Number(transportationUser?.transportationUserId),
        loginId,
        password
      }
    });

    if (!transportationDriver) {
      errors.push({
        status: false,
        message: "追加に失敗しました"
      });
    }
    return errors;

  } catch (error) {
    errors.push({
      status: false,
      message: "データベースエラーが発生しました"
    });
    return errors;
  }
}