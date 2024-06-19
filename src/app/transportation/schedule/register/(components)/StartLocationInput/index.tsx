import type { FC } from 'react';

const StartLocationInput: FC = () => {
  return (
    <div>
      <label>出発地：</label>
      <input type='text' name='StartLocationInput' />
    </div>
  );
};

export default StartLocationInput;