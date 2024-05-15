import type { VerifyErrors } from 'jsonwebtoken';

import { verify as jwtVerify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { cache } from 'react';

import Config from '@/Config';

type RawJWTPayload = {
  id: number;
  name: string;
};

type VerifyResult =
  | {
      success: false;
      cause: VerifyErrors | Error;
    }
  | {
      success: true;
      payload: RawJWTPayload;
    };

const verify = (token: string) => {
  return new Promise<VerifyResult>(resolve => {
    jwtVerify(token, Config.jwtSecret, (error, result) => {
      if (error) {
        console.error('Failed to decode JWT token.', error);
        resolve({
          success: false,
          cause: error,
        });
        return;
      }
      resolve({
        success: true,
        payload: result as RawJWTPayload,
      });
    });
  });
};

export const verifyToken = cache(async (_token?: string) => {
  const token = _token || cookies().get(Config.cookie.session)?.value;
  
  if (!token) {
    return {
      success: false as const,
      cause: new Error('No session cookie detected.'),
    };
  }

  const result = await verify(token);
  if (!result.success) return result;

  const payload = result.payload;

  return {
    success: true as const,
    payload,
  };
});