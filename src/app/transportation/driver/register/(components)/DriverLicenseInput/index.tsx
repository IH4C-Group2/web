import type { FC } from 'react';

const DriverLicenseInput: FC = () => {
  return (
    <div>
      <select name='driverLicense'>
        <option value="大型免許">大型免許</option>
        <option value="中型免許">中型免許</option>
        <option value="準中型免許">準中型免許</option>
      </select>
    </div>
  );
};

export default DriverLicenseInput;