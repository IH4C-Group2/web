import type { FC } from "react";

type Props = {
  defaultDriverId: number;
};

const DriverIdInput: FC<Props> = ({ defaultDriverId }) => {
  return (
    <div>
      <label>ドライバーID: </label>
      <input type="text" name="driverId" defaultValue={defaultDriverId}/>
    </div>
  );
};

export default DriverIdInput;