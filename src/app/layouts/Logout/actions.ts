'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import Config from '@/Config';
import { verifyToken } from '@/util/jwt';
import { redirect } from 'next/navigation';

export const logout = async () => {
  const token = await verifyToken();

  if (token.success) {
    cookies().delete(Config.cookie.session);

    revalidatePath(`/${token.payload.type}/dashboard`, 'layout');
    redirect(`/${token.payload.type}/login`)
  }
};
