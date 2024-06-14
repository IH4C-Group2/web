// import Link from 'next/link';

import { logout } from './actions';

const Logout = () => {
  return (
    <div className="flex justify-start w-full mt-5 p-4">
      <form action={logout}>
        <button type='submit' className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ ログアウト
        </button>
      </form>
    </div>
  );
};

export default Logout;
