'use server';

import { cookies } from 'next/headers';
import { SHA256 } from 'crypto-js';
import { sign } from 'jsonwebtoken';
import { prisma } from "@/utils/prisma";
import Config from '@/Config';

export const login = async (formData: FormData) => {
  const password = formData.get('password')?.toString();
  const loginId = formData.get('id')?.toString();

  if (!password || !loginId) return false;

  const transportationUser = await prisma.transportationUser.findUnique({
    where: {
      loginId,
      password: SHA256(password).toString()
    }
  });

  if (!transportationUser) return false;

  const token = sign({
    id: transportationUser.transportationUserId,
    type: 'transportation',
  }, Config.jwtSecret);

  cookies().set(Config.cookie.session, token);

  return true;
}