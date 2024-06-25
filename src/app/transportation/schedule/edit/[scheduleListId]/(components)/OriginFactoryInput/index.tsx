import type { FC } from 'react';
import type { FactoryInfo } from '@/utils/prisma';

type Props = {
  factorys: FactoryInfo[];
};

const OriginFactoryId: FC<Props> = ({ factorys }) => {
  return (
    <div>
      <label>出発地：</label>
      <select name="originFactory" id="">
        {factorys.map((factory) => (
          <option key={factory.factoryInfoId}>{factory.factoryDetailName}</option>
        ))}
      </select>
    </div>
  );
};

export default OriginFactoryId;
