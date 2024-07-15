'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiTransportatioRregiste } from '@/types/form/validation';

type Props = {
  defaultResponsibleName: string;
};

const ResponsibleNameInput: FC<Props> = ({ defaultResponsibleName }) => {
  const [responsibleName, setResponsibleName] = useState('');

  console.log(responsibleName);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiTransportatioRregiste),
    defaultValues: {
      responsibleName: defaultResponsibleName,
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
        className="border border-black"
        defaultValue={(defaultResponsibleName)}
        onChange={e => {
          setResponsibleName(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.responsibleName?.message} />
    </div>
  );
};

export default ResponsibleNameInput;