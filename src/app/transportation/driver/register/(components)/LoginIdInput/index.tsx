'use client';

import type { FC, ReactNode } from 'react';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { maxLength, minLength, pipe, string } from 'valibot';

import ErrorMessage from '../ErrorMessage';

const LoginIdInput: FC = () => {
  const [description, setDescription] = useState('');

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onBlur',
    resolver: valibotResolver(pipe(string(), minLength(10, '説明文は10文字以上入力してください'), maxLength(2000, '説明文は2000文字以上は入力できません'))),
    defaultValues: {
      description: '',
    },
  });

  // 検証をレンダリング時に実行
  useEffect(() => {
    trigger('description');
  }, [trigger]);

  console.log(errors);

  return (
    <div>
      <div>
        <textarea
          {...register('description')}
          placeholder='Description (Markdown supported)'
          onChange={e => {
            setDescription(e.target.value.replaceAll('\r\n', '\n'));
          }}
        />
        <ErrorMessage message={errors.description?.message} />
      </div>
    </div>
  );
};

export default LoginIdInput;