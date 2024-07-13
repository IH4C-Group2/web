'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiFactoryRegisterSchema } from '@/types/form/validation';

const AddressInput: FC = () => {
    const [address, setAddress] = useState('');

    console.log(address);

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver: valibotResolver(hitachiFactoryRegisterSchema),
        defaultValues: {
            address,
        },
    });

    if (errors) {

    }

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
                onChange={e => {
                    setAddress(e.target.value.replaceAll('\r\n', '\n'));
                }}
            />
            <ErrorMessage message={errors.address?.message} />
        </div>
    );
};

export default AddressInput;