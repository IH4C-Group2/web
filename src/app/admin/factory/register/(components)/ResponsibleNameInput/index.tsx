'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiFactoryRegisterSchema } from '@/types/form/validation';

const ResponsibleNameInput: FC = () => {
  const [responsibleName, setResponsibleName] = useState('');

  console.log(responsibleName);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiFactoryRegisterSchema),
    defaultValues: {
      responsibleName,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('responsibleName');
  }, [trigger]);

  return (
    <div>
      <p>責任者</p>
      <input
        {...register('responsibleName')}
        type='text'
        name='responsibleName'
        onChange={e => {
          setResponsibleName(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.responsibleName?.message} />
    </div>
  );
};

export default ResponsibleNameInput;