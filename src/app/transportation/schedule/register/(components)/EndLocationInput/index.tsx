import type { FC } from 'react';
import type { FactoryInfo } from '@/utils/prisma';

type Props = {
  factorys: FactoryInfo[];
};

const EndLocationInput: FC<Props> = ({ factorys }) => {
  return (
    <div>
      <select name="EndLocationInput" className="border border-black">
        {factorys.map((factory) => (
          <option key={factory.factoryInfoId} value={factory.factoryInfoId}>{factory.factoryDetailName}</option>
        ))}
      </select>
    </div>
  );
};

export default EndLocationInput;