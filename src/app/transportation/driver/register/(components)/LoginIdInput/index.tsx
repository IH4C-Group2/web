'use client';

import type { FC } from 'react';

import ErrorMessage from '../ErrorMessage';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { pipe, object, string, number, minLength, maxLength, regex, minValue } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';

type props = {
  defaultLoginId?: string;
};

const LoginIdInput: FC<props> = ({ defaultLoginId }) => {
  const [loginId, setLoginId] = useState(defaultLoginId);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(
      pipe(
        string(),
        minLength(8, '8文字以上、15文字以下で入力してください'),
        maxLength(15, '8文字以上、15文字以下で入力してください'),
        regex(/^[a-zA-Z\d]$/, '半角英数字のみを入力してください'),
      ),
    ),
    defaultValues: {
      loginId: defaultLoginId,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('loginId');
  }, [trigger]);

  return (
    <div>
      <input
        {...register('loginId')}
        type='text'
        name='loginId'
        onChange={e => {
          setLoginId(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.loginId?.message} />
    </div>
  );
};

export default LoginIdInput;