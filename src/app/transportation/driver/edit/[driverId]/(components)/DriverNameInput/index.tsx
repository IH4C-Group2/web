import type { FC } from 'react';

type Props = {
  defaultDriverName: string;
};

const DriverNameInput: FC<Props> = ({ defaultDriverName }) => {
  return (
    <div>
      <label>名前 : </label>
      <input type='text' name='driverName' defaultValue={(defaultDriverName)} />
    </div>
  );
};

export default DriverNameInput;