'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiFactoryRegisterSchema } from '@/types/form/validation';

const FactoryNameInput: FC = () => {
    const [factoryName, setFactoryName] = useState('');

    console.log(factoryName);

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver: valibotResolver(hitachiFactoryRegisterSchema),
        defaultValues: {
            factoryName,
        },
    });

    if (errors) {

    }

    // 検証をレンダリング時に実行
    useEffect(() => {
        trigger('factoryName');
    }, [trigger]);

    return (
        <div>
            <p>会社名</p>
            <input
                {...register('factoryName')}
                type='text'
                name='factoryName'
                onChange={e => {
                    setFactoryName(e.target.value.replaceAll('\r\n', '\n'));
                }}
            />
            <ErrorMessage message={errors.factoryName?.message} />
        </div>
    );
};

export default FactoryNameInput;