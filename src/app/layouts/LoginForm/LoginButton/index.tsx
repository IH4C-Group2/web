import type { FC } from 'react';

const LoginButton: FC = () => {
  return (
    <div>
      <button type="submit" className="font-bold py-2 px-4 bg-sky-600 text-white shadow-2xl">ログイン</button>
    </div>
  );
};

export default LoginButton;