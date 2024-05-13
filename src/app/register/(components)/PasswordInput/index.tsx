'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';

const PasswordInput: FC = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <div>
      <input type='password' name='password' />
      
    </div>
  );
};

export default PasswordInput;