'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { transportationDriverEditSchema } from '@/types/form/validation';

type Props = {
  defaultDriverTel: string;
};

const DriverTelInput: FC<Props> = ({ defaultDriverTel }) => {
  const [driverTel, setDriverTel] = useState('');

  console.log(driverTel);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(transportationDriverEditSchema),
    defaultValues: {
      driverTel: defaultDriverTel,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('driverTel');
  }, [trigger]);

  return (
    <div>
      <label>電話番号 : </label>
      <input
        {...register('driverTel')}
        type='text'
        name='driverTel'
        defaultValue={(defaultDriverTel)}
        onChange={e => {
          setDriverTel(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.driverTel?.message} />
    </div>
  );
};

export default DriverTelInput;