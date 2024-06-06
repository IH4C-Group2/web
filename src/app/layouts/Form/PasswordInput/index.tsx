import type { FC } from 'react';

const PasswordInput: FC = () => {
  return (
    <div>
      <input type='password' name='password' className="w-full py-1 border border-black"/>
    </div>
  );
};

export default PasswordInput;