'use client';

import type { ErrorType } from '../../actions';

import { useRouter } from 'next/navigation';
import { useState, type FC, type PropsWithChildren } from 'react';

type Props = {
  action: (formData: FormData) => Promise<ErrorType>;
};

const Form: FC<PropsWithChildren<Props>> = ({ children, action }) => {
  const router = useRouter()
  const [error, setError] = useState<ErrorType>({
    status: false,
    message: ''
  });

  const handleSubmit = async (formdata: FormData) => {
    const res = await action(formdata);

    if (res.status) router.push('/transportation/dashboard');
      
    setError(res);
  }

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)) }}>{children}</form>
      {!error?.status && (
        <div>
          <p>{error.message}</p>
        </div>
      )}
    </>
  );
}

export default Form;