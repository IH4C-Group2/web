'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiFactoryRegisterSchema } from '@/types/form/validation';

const FactoryDetailNameInput: FC = () => {
  const [factoryDetailName, setFactoryDetailName] = useState('');

  console.log(factoryDetailName);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiFactoryRegisterSchema),
    defaultValues: {
      factoryDetailName,
    },
  });

  if (errors) {

  }

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('factoryDetailName');
  }, [trigger]);

  return (
    <div>
      <p>工場名</p>
      <input
        {...register('factoryDetailName')}
        type='text'
        name='factoryDetailName'
        onChange={e => {
          setFactoryDetailName(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.factoryDetailName?.message} />
    </div>
  );
};

export default FactoryDetailNameInput;