'use server';

import { SHA256 } from 'crypto-js';

import { prisma } from "@/utils/prisma";

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

  return true;
}