import type { FC } from 'react';
import type { FactoryInfo } from '@/utils/prisma';

type Props = {
  factorys: FactoryInfo[];
};

const EndLocationInput: FC<Props> = ({ factorys }) => {
  return (
    <div>
      <label>到着地：</label>
      <select name="landingFactory" id="">
        {factorys.map((factory) => (
          <option key={factory.factoryInfoId}>{factory.factoryDetailName}</option>
        ))}
      </select>
    </div>
  );
};

export default EndLocationInput;