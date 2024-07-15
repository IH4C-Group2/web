'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiTransportatioRregiste } from '@/types/form/validation';

const AddressInput: FC = () => {
  const [address, setAddress] = useState('');

  console.log(address);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(hitachiTransportatioRregiste),
    defaultValues: {
      address,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('address');
  }, [trigger]);

  return (
    <div>
      <input
        {...register('address')}
        type='text'
        name='address'
        className="border border-black"
        onChange={e => {
          setAddress(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.address?.message} />
    </div>
  );
};

export default AddressInput;