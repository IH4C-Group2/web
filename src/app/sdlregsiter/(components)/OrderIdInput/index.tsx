import type { FC } from 'react';

const OrderIdInput: FC = () => {
  return (
    <div>
      <label>オーダーID：</label>
        <input type="number" name="OrderIdInput" />
    </div>
  );
};

export default OrderIdInput;