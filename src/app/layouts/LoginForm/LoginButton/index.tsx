import type { FC } from 'react';

const LoginButton: FC = () => {
  return (
    <div>
      <button type="submit" className="font-bold py-2 px-4 bg-sky-500 text-white">ログイン</button>
    </div>
  );
};

export default LoginButton;