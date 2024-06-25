import type { FC } from 'react';

type Props = {
  defaultOrderId: number;
};

const OrderIdInput: FC<Props> = ({ defaultOrderId }) => {
  return (
    <div>
      <label>オーダーID: </label>
      <input type="number" name="orderId" defaultValue={defaultOrderId} />
    </div>
  );
};

export default OrderIdInput;
