'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { transportationDriverRegisterSchema } from '@/types/form/validation';

const EmployeeNumInput: FC = () => {
  const [employeeNum, setEmployeeNum] = useState('');

  console.log(employeeNum);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(transportationDriverRegisterSchema),
    defaultValues: {
      employeeNum,
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('employeeNum');
  }, [trigger]);

  return (
    <div>
      <label>社員番号:</label>
      <input
        {...register('employeeNum')}
        type='text'
        name='employeeNum'
        onChange={e => {
          setEmployeeNum(e.target.value.replaceAll('\r\n', '\n'));
        }}
      />
      <ErrorMessage message={errors.employeeNum?.message} />
    </div>
  );
};

export default EmployeeNumInput;