'use client';

import type { FC } from 'react';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

import ErrorMessage from '@/app/components/ErrorMessage';
import { hitachiFactoryRegisterSchema } from '@/types/form/validation';

const OfficeTELInput: FC = () => {
    const [officeTEL, setOfficeTEL] = useState('');

    console.log(officeTEL);

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver: valibotResolver(hitachiFactoryRegisterSchema),
        defaultValues: {
            officeTEL,
        },
    });

    console.log(errors);

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
                onChange={e => {
                    setOfficeTEL(e.target.value.replaceAll('\r\n', '\n'));
                }}
            />
            <ErrorMessage message={errors.officeTEL?.message} />
        </div>
    );
};

export default OfficeTELInput;