import type { FC } from 'react';

const SubmitInputBtn: FC = () => {
  return (
    <div>
      <input type="submit" value="登録する" className="border border-black p-100 bg-white" />
    </div>
  );
};

export default SubmitInputBtn;