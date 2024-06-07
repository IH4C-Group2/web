import type { FC } from 'react';

const EmailInput: FC = () => {
  return (
    <div>
      <input type='email' name='email' className="w-full py-1 border border-black"/>
    </div>
  );
};

export default EmailInput;