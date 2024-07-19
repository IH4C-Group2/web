'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiTransportatioRregiste } from '@/types/form/validation';

import type { FC } from 'react';

type Props = {
  defaultaddress: string;
};

const AddressInput: FC<Props> = ({ defaultaddress }) => {
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
      address: defaultaddress,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('address');
  }, [trigger]);

  return (
    <div>
      <p>住所</p>
      <input
        {...register('address')}
        type='text'
        name='address'
        className="border border-black"
        defaultValue={(defaultaddress)}
        onChange={e => {
          setAddress(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.address?.message} />
    </div>
  );
};

export default AddressInput;