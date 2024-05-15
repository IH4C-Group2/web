'use server';

import { cookies } from 'next/headers';
import { SHA256 } from 'crypto-js';
import { sign } from 'jsonwebtoken';

import { prisma } from "@/utils/prisma";
import Config from '@/Config';

export const login = async (formData: FormData) => {
  const password = formData.get('password')?.toString();
  const email = formData.get('email')?.toString();

  if (!password || !email) return false;

  const user = await prisma.user.findUnique({
    where: {
      email,
      password: SHA256(password).toString()
    }
  });

  if (!user) return false;

  const token = sign({
    id: user.id,
    name: user.name
  }, Config.jwtSecret);

  cookies().set(Config.cookie.session, token);

  return true;
}