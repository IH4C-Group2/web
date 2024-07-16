'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiTransportatioRregiste } from '@/types/form/validation';

type Props = {
  defaultLoginid: string;
};


const LoginIdInput: FC<Props> = ({ defaultLoginid }) => {
  const [loginId, setLoginId] = useState('');

  console.log(loginId);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiTransportatioRregiste),
    defaultValues: {
      loginId: defaultLoginid,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('loginId');
  }, [trigger]);

  return (
    <div>
      <p>ログインID</p>
      <input
        {...register('loginId')}
        type='text'
        name='loginId'
        className="border border-black"
        defaultValue={(defaultLoginid)}
        onChange={e => {
          setLoginId(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.loginId?.message} />
    </div>
  );
};

export default LoginIdInput;