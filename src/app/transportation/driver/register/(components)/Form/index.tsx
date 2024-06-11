'use client';

import type { ErrorType } from '../../actions';

import { redirect } from 'next/navigation';
import { useState, type FC, type PropsWithChildren } from 'react';

type Props = {
  action: (formData: FormData) => Promise<ErrorType>;
};

const Form: FC<PropsWithChildren<Props>> = ({ children, action }) => {
  const [error, setError] = useState<ErrorType>({
    status: false,
    message: ''
  });

  const handleSubmit = async (formdata: FormData) => {
    const res = await action(formdata);

    if (res.status) redirect('/transportation/dashboard');
      
    setError(res);
  }

  return (
    <>
      <form action={handleSubmit}>{children}</form>
      {!error?.status && (
        <div>
          <p>{error.message}</p>
        </div>
      )}
    </>
  );
}

export default Form;