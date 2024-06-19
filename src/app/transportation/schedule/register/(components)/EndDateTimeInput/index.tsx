import type { FC } from 'react';

const EndDateTimeInput: FC = () => {
  return (
    <div>
      <label>作業終了予定：</label>
        <input type="datetime-local" name="EndDateTimeInput" />
    </div>
  );
};

export default EndDateTimeInput;