import type { FC } from 'react';

const EndLocationInput: FC = () => {
  return (
    <div>
      <label>到着地：</label>
      <input type='text' name='EndLocationInput' />
    </div>
  );
};

export default EndLocationInput;