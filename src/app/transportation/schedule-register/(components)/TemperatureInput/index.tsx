import type { FC } from 'react';

const TemperatureInput: FC = () => {
  return (
    <div>
      <label>貨物内温度：</label>
        <input type="text" name="TemperatureInput" />
    </div>
  );
};

export default TemperatureInput;