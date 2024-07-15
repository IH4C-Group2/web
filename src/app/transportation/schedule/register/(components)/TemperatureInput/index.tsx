'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { transportationScheduleSchema } from '@/types/form/validation';

const TemperatureInput: FC = () => {
  const [temperature, setTemperature] = useState('');

  console.log(temperature);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(transportationScheduleSchema),
    defaultValues: {
      temperature,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('temperature');
  }, [trigger]);

  return (
    <div>
      <input
        {...register('temperature')}
        type="text"
        name="temperature"
        className="border border-black"
        onChange={e => {
          setTemperature(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.temperature?.message} />
    </div>
  );
};

export default TemperatureInput;