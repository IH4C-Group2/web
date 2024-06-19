import type { FC } from 'react';

const StartDateTimeInput: FC = () => {
  return (
    <div>
      <label>作業開始予定：</label>
        <input type="datetime-local" name="StartDateTimeInput" />
    </div>
  );
};

export default StartDateTimeInput;