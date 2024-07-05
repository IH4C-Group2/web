import type { FC } from 'react';

const IdInput: FC = () => {
  return (
      <input type='text' name='id' minLength={8} maxLength={15} className='w-8/12 py-1 border-2 border-black bg-gray-200'/>
  );
};

export default IdInput;