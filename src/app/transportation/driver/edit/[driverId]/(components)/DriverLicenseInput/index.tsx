import type { FC } from 'react';

type Props = {
  defaultDriverLicense: string;
};

const DriverLicenseInput: FC<Props> = ({ defaultDriverLicense }) => {
  return (
    <div>
      <label>運転免許 : </label>
      <select name='driverLicense' defaultValue={(defaultDriverLicense)}>
        <option value="大型免許">大型免許</option>
        <option value="中型免許">中型免許</option>
        <option value="準中型免許">準中型免許</option>
      </select>
    </div>
  );
};

export default DriverLicenseInput;