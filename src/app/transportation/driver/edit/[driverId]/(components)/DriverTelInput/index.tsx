import type { FC } from 'react';

type Props = {
  defaultDriverTel: string;
};

const DriverTelInput: FC<Props> = ({ defaultDriverTel }) => {
  return (
    <div>
      <label>電話番号 : </label>
      <input type='text' name='driverTel' defaultValue={(defaultDriverTel)} />
    </div>
  );
};

export default DriverTelInput;