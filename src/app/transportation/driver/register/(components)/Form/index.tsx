'use client';

import type { ErrorType } from '../../actions';
import { redirect } from 'next/navigation';
import { useState, type FC, type PropsWithChildren } from 'react';

type Props = {
  action: (formData: FormData) => Promise<Array<ErrorType>>;
};

const Form: FC<PropsWithChildren<Props>> = ({ children, action }) => {
  const [error, setError] = useState<ErrorType | null>(null);

  const handleSubmit = async (formdata: FormData) => {
    const res = await action(formdata);

    if (res) {
      setError(res[0]);
    } else {
      redirect('/transportation/dashboard');
    }
  }

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)) }}>{children}</form>
      {error && (
        <div>
          <p>{error.message}</p>
        </div>
      )}
    </>
  );
}

export default Form;