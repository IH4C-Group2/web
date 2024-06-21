'use server';

import { prisma } from '@/utils/prisma';

export const deleteSchedule = async (id: number) => {
  await prisma.scheduleList.delete({
    where: { scheduleListId: id },
  });
};
