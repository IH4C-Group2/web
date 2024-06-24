'use server';

import { prisma } from "@/utils/prisma";
import { getTransportationUser } from '@/getters/user';
import { SHA256 } from 'crypto-js';

export type ErrorType = {
  status: boolean;
  message: string;
}

export const register = async (formData: FormData): Promise<ErrorType> => {
  const transportationUser = await getTransportationUser();
  const employeeNum = formData.get('employeeNum')?.toString();
  const driverName = formData.get('driverName')?.toString();
  const driverTel = formData.get('driverTel')?.toString();
  const driverLicense = formData.get('driverLicense')?.toString();
  const loginId = formData.get('loginId')?.toString();
  const password = formData.get('password')?.toString();

  if (!employeeNum || !driverName || !driverTel || !driverLicense || !loginId || !password) {
    return {
      status: false,
      message: "入力フォーマットが違います"
    };
  }

  const existingLogins = await prisma.transportationDriver.findMany({
    select: { loginId: true }
  });

  for (const existingLogin of existingLogins) {
    if (existingLogin.loginId === loginId) {
      return {
        status: false,
        message: "このIDはすでに存在します"
      };
    }
  }

  try {
    const transportationDriver = await prisma.transportationDriver.create({
      data: {
        driverName,
        driverTel,
        employeeNum: Number(employeeNum),
        driverLicense,
        transportationUserId: Number(transportationUser?.transportationUserId),
        loginId,
        password: SHA256(password).toString()
      }
    });

    if (!transportationDriver) {
      return {
        status: false,
        message: "追加に失敗しました"
      };
    }

    return {
      status: true,
      message: ""
    };

  } catch (error) {
    return {
      status: false,
      message: "データベースエラーが発生しました"
    };
  }
}