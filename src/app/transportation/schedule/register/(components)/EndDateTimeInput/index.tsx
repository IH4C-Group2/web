import type { FC } from 'react';

const EndDateTimeInput: FC = () => {
  return (
    <div>
        <input type="datetime-local" name="EndDateTimeInput" className="border border-black"/>
    </div>
  );
};

export default EndDateTimeInput;