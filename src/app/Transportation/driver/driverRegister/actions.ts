'use server';

import { prisma } from "@/utils/prisma";
import { getTransportationUser } from '@/getters/user';

export const register = async (formData: FormData) => {
  const transportationUser = await getTransportationUser();
  const employeeNum = formData.get('employeeNum')?.toString();
  const driverName = formData.get('driverName')?.toString();
  const driverTel = formData.get('driverTel')?.toString();
  const driverLicense = formData.get('driverLicense')?.toString();

  if (!employeeNum || !driverName || !driverTel || !driverLicense) return false;

  const transportationDriver = await prisma.transportationDriver.create({
    data: {
      driverName,
      driverTel,
      employeeNum,
      driverLicense,
      transportationUserId: Number(transportationUser?.transportationUserId),
    }
  });

  if (!transportationDriver) return false;

  return true;
}