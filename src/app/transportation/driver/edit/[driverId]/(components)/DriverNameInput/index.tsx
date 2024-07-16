'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { transportationDriverEditSchema } from '@/types/form/validation';

type Props = {
  defaultDriverName: string;
};

const DriverNameInput: FC<Props> = ({ defaultDriverName }) => {
  const [driverName, setDriverName] = useState('');

  console.log(driverName);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(transportationDriverEditSchema),
    defaultValues: {
      driverName: defaultDriverName,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('driverName');
  }, [trigger]);

  return (
    <div>
      <label>名前 : </label>
      <input
        {...register('driverName')}
        type='text'
        name='driverName'
        defaultValue={(defaultDriverName)}
        onChange={e => {
          setDriverName(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.driverName?.message} />
    </div>
  );
};

export default DriverNameInput;