import type { FC } from "react";

import type { TransportationDriver } from '@/utils/prisma';

type Props = {
  drivers: TransportationDriver[]
};

const DriverInput: FC<Props> = ({ drivers }) => {
  return (
    <div>
      <select name="driverId" className="border border-black">
        {drivers.map(driver => (
          <option key={driver.driverId} value={driver.driverId}>{driver.driverName}</option>
        ))}
      </select>

    </div>
  );
};

export default DriverInput;