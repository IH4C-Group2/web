import type { FC } from 'react';

import type { TransportationDriver } from '@/utils/prisma';

type Props = {
  defaultDriverId: number;
  drivers: TransportationDriver[]
};

const DriverInput: FC<Props> = ({ defaultDriverId, drivers }) => {
  return (
    <div>
      <label>ドライバー: </label>
      <select name="driverId" defaultValue={defaultDriverId}>
        {drivers.map(driver => (
          <option value={driver.driverId}>{driver.driverName}</option>
        ))}
      </select>
    </div>
  );
};

export default DriverInput;
