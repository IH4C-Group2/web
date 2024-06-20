import type { FC } from 'react';

type Props = {
  defaultOrderId: number;
};

const OrderIdInput: FC<Props> = ({ defaultOrderId }) => {
  return (
    <div>
      <label>オーダーID: </label>
      <input type="number" name="OrderIdInput" defaultValue={defaultOrderId} />
    </div>
  );
};

export default OrderIdInput;
