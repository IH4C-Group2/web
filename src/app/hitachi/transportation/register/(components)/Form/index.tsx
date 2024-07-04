'use client';

import { redirect } from 'next/navigation';
import { useState , type FC, type PropsWithChildren } from 'react';

type Props = {
    action: (formData: FormData) => Promise<boolean>;
};

const Form: FC<PropsWithChildren<Props>> = ({ children, action}) => {
    const [error, SetError] = useState(false);

    const handleSubmit = async (formdata: FormData) => {
        const res = await action(formdata);

        if (res) redirect('./list');

        SetError(false);
    }

    return (
        <>
            <form action={handleSubmit}>{children}</form>
            {error && (
            <div>
                <p>入力フォーマットが違います</p>
            </div>
            )}
        </>
    )
}

export default Form;