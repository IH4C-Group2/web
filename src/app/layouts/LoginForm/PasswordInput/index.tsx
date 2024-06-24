import type { FC } from 'react';

const PasswordInput: FC = () => {
  return (
      <input type='password' name='password' className='w-8/12 py-1 border-2 border-black bg-gray-200'/>
  );
};

export default PasswordInput;