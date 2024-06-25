import type { FC } from 'react';

const StartDateTimeInput: FC = () => {
  return (
    <div>
        <input type="datetime-local" name="StartDateTimeInput" className="border border-black mx-100"/>
    </div>
  );
};

export default StartDateTimeInput;