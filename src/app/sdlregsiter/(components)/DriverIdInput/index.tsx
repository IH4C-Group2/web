import type { FC } from "react";

const DriverIdInput: FC = () => {
    return (
        <div>
            <label>ドライバーID：</label>
            <input type="text" name="DriverIdInput" />
        </div>
    );
};

export default DriverIdInput;