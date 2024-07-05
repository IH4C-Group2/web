'use server';

import { prisma } from "@/utils/prisma";
import { getTransportationUser } from '@/getters/user';
import { SHA256 } from 'crypto-js';

import { safeParse } from 'valibot';
import { userSchema } from "@/types/form/validation";
import { transportationScheme } from "@/types/form/validation";

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

  // const { success, output, issues } = safeParse(userSchema, {
  //   loginId: loginId,
  //   password: password,
  // });
  // if (!success) {
  //   return { status: false, message: issues[0].message };
  // }

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
        employeeNum,
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