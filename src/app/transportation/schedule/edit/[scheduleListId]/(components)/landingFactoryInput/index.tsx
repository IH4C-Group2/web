import type { FC } from 'react';
import type { FactoryInfo } from '@/utils/prisma';

type Props = {
  defaultEndLocation: number;
  factorys: FactoryInfo[];
};

const EndLocationInput: FC<Props> = ({ defaultEndLocation, factorys }) => {
  return (
    <div>
      <label>到着地：</label>
      <select name="landingFactory" defaultValue={defaultEndLocation} >
        {factorys.map((factory) => (
          <option key={factory.factoryInfoId} value={factory.factoryInfoId}>{factory.factoryDetailName}</option>
        ))}
      </select>
    </div>
  );
};

export default EndLocationInput;