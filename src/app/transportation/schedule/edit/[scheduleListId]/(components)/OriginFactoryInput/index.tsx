import type { FC } from 'react';
import type { FactoryInfo } from '@/utils/prisma';

type Props = {
  defaultStartLocation: number;
  factorys: FactoryInfo[];
};

const OriginFactoryId: FC<Props> = ({ defaultStartLocation, factorys }) => {
  return (
    <div>
      <label>出発地：</label>
      <select name="originFactory" defaultValue={defaultStartLocation}>
        {factorys.map((factory) => (
          <option key={factory.factoryInfoId} value={factory.factoryInfoId}>{factory.factoryDetailName}</option>
        ))}
      </select>
    </div>
  );
};

export default OriginFactoryId;
