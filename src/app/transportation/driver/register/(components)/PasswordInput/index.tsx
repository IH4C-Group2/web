'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { transportationDriverRegisterSchema } from '@/types/form/validation';

const PasswordInput: FC = () => {
  const [password, setPassword] = useState('');

  console.log(password);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(transportationDriverRegisterSchema),
    defaultValues: {
      password,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('password');
  }, [trigger]);

  return (
    <div>
      <label>パスワード:</label>
      <input
        {...register('password')}

        type='password'
        name='password'

        onChange={e => {
          setPassword(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.password?.message} />
    </div>
  );
};

export default PasswordInput;