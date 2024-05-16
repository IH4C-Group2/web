import { cache } from 'react';

import { verifyToken } from '@/util/jwt';
import { prisma } from '@/utils/prisma';

export const getUser = cache(async () => {
  const result = await verifyToken();
  if (!result.success) return null;

  const user = await prisma.user.findUnique({ where: { id: result.payload.id } });
  if (!user) return null;

  return user;
});