'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiTransportatioRregiste } from '@/types/form/validation';

const UserNameInput: FC = () => {
    const [userName, setUserName] = useState('');

    console.log(userName);

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver: valibotResolver(hitachiTransportatioRregiste),
        defaultValues: {
            userName,
        },
    });

    // 検証をレンダリング時に実行
    useEffect(() => {
        trigger('userName');
    }, [trigger]);

    return (
        <div>
            <input
                {...register('userName')}
                type='text'
                name='userName'
                className="border border-black"
                onChange={e => {
                    setUserName(e.target.value.replaceAll('\r\n', '\n'));
                }}
            />
            <ErrorMessage message={errors.userName?.message} />
        </div>
    );
};

export default UserNameInput;