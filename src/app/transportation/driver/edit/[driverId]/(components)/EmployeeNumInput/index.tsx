import type { FC } from 'react';

type Props = {
  defaultEmployeeNum: string;
};

const EmployeeNumInput: FC<Props> = ({ defaultEmployeeNum }) => {
  return (
    <div>
      <label>社員番号 : </label>
      <input type='text' name='employeeNum' defaultValue={(defaultEmployeeNum)} />
    </div>
  );
};

export default EmployeeNumInput;