'use server';

import { cookies } from 'next/headers';
import { SHA256 } from 'crypto-js';
import { sign } from 'jsonwebtoken';

import { prisma } from "@/utils/prisma";
import Config from '@/Config';

export const login = async (formData: FormData) => {
  const password = formData.get('password')?.toString();
  const id = formData.get('id')?.toString();

  if (!password || !id) return false;

  const user = await prisma.transportationDriver.findUnique({
    where: {
      loginId: id,
      password: SHA256(password).toString()
    }
  });

  if (!user) return false;

  const token = sign({
    id: user.driverId,
    type: 'driver'
  }, Config.jwtSecret);

  cookies().set(Config.cookie.session, token);

  return true;
}