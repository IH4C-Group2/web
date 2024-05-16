'use server';

import { cookies } from 'next/headers';
import { SHA256 } from 'crypto-js';
import { sign } from 'jsonwebtoken';

import { prisma } from "@/utils/prisma";
import Config from '@/Config';

export const register = async (formData: FormData) => {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const confirmPassword = formData.get('confirmPassword')?.toString();

  if (!name || !email || !password || !confirmPassword) return false;

  if (password !== confirmPassword) return false;

  const user = await prisma.user.create({
    data: {
      email,
      password: SHA256(password).toString(),
      name,
      companyId: 0
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