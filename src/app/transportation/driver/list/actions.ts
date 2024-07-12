'use server';

import { prisma } from "@/utils/prisma";

export const deleteDriver = async (driverId: number) => {
  try {
    await prisma.transportationDriver.delete({
      where: { driverId },
    });
    return true;
  } catch (error) {
    console.error('Error deleting driver:', error);
    return false;
  }
};
