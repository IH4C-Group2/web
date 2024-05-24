'use server';

import { SHA256 } from 'crypto-js';

export const login = async (formData: FormData) => {
  const password = formData.get('password')?.toString();

  if (!password) return '';

  return SHA256(password).toString();
}