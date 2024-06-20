import type { FC } from 'react';

import { toDateTimeLocalString } from '@/utils/date';

type Props = {
  defaultEndDateTime: Date;
};


const EndDateTimeInput: FC<Props> = ({ defaultEndDateTime }) => {
  return (
    <div>
      <label>作業終了予定：</label>
        <input type="datetime-local" name="EndDateTimeInput" defaultValue={toDateTimeLocalString(defaultEndDateTime)}/>
    </div>
  );
};

export default EndDateTimeInput;
