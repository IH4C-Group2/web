'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiTransportatioRregiste } from '@/types/form/validation';

type Props = {
  defaulofficeTel: string;
};

const OfficeTELInput: FC<Props> = ({ defaulofficeTel }) => {
  const [officeTEL, setOfficeTEL] = useState('');

  console.log(officeTEL);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiTransportatioRregiste),
    defaultValues: {
      officeTEL: defaulofficeTel,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('officeTEL');
  }, [trigger]);

  return (
    <div>
      <p>事務所TEL</p>
      <input
        {...register('officeTEL')}
        type='text'
        name='officeTEL'
        className="border border-black"
        defaultValue={(defaulofficeTel)}
        onChange={e => {
          setOfficeTEL(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.officeTEL?.message} />
    </div>
  );
};

export default OfficeTELInput;