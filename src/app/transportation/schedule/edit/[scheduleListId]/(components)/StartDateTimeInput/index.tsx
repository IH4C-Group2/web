import type { FC } from 'react';

import { toDateTimeLocalString } from '@/utils/date';

type Props = {
  defaultStartDateTimeId: Date;
};

const StartDateTimeInput: FC<Props> = ({ defaultStartDateTimeId }) => {
  console.log(typeof defaultStartDateTimeId.toISOString());
  return (
    <div>
      <label>作業開始予定：</label>
      <input type="datetime-local" name="startDatetime" defaultValue={toDateTimeLocalString(defaultStartDateTimeId)} />
    </div>
  );
};

export default StartDateTimeInput;
