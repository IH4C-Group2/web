'use server';

import { prisma } from '@/utils/prisma';

export const deleteFactory = async (infoId: number, userId: number) => {
  //factoryInfo 削除
  await prisma.factoryInfo.delete({
    where: { factoryInfoId: infoId }
  });

  //factoryUser 削除
  await prisma.factoryUser.delete({
    where: { factoryUserId: userId }
  });
};
