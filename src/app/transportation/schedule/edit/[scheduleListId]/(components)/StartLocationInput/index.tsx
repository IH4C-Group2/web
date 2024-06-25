import type { FC } from 'react';
import type { FactoryInfo } from '@/utils/prisma';

type Props = {
  factorys: FactoryInfo[];
};

const StartLocationInput: FC<Props> = ({ factorys }) => {
  return (
    <div>
      <label>出発地：</label>
      <select name="StartLocationInput" id="">
        {factorys.map((factory) => (
          <option>{factory.factoryDetailName}</option>
        ))}
      </select>
      <input type='text' name='StartLocationInput' />
    </div>
  );
};

export default StartLocationInput;
