'use client';

import { useState, type FC, type PropsWithChildren } from 'react';

type Props = {
  action: (formData: FormData) => Promise<string>;
};

const Form: FC<PropsWithChildren<Props>> = ({ children, action}) => {
  const [password, SetPassword] = useState<string>('');

  const handleSubmit = async (formdata: FormData) => {
    SetPassword(await action(formdata));
  }

  return (
    <>
      <form action={handleSubmit}>{children}</form>
      <div>
        <p>{password}</p>
      </div>
    </>
  )
}

export default Form;