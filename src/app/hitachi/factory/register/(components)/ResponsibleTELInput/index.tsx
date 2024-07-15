'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiFactoryRegisterSchema } from '@/types/form/validation';

const ResponsibleTELInput: FC = () => {
  const [responsibleTEL, setResponsibleTEL] = useState('');

  console.log(responsibleTEL);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiFactoryRegisterSchema),
    defaultValues: {
      responsibleTEL,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('responsibleTEL');
  }, [trigger]);

  return (
    <div>
      <p>責任者TEL</p>
      <input
        {...register('responsibleTEL')}
        type='text'
        name='responsibleTEL'
        onChange={e => {
          setResponsibleTEL(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.responsibleTEL?.message} />
    </div>
  );
};

export default ResponsibleTELInput;