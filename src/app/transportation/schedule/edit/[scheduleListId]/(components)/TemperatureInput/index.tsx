import type { FC } from 'react';

type Props = {
  defaultTemperatureId: string;
};

const TemperatureInput: FC<Props> = ({ defaultTemperatureId }) => {
  return (
    <div>
      <label>貨物内温度：</label>
        <input type="text" name="TemperatureInput" defaultValue={defaultTemperatureId} />
    </div>
  );
};

export default TemperatureInput;