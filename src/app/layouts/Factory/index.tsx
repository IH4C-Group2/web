import Link from 'next/link';

const Logout = () => {
  return (
    <div className="flex justify-start w-full mt-5 p-4">
      <Link href="/logout" className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
        ≪ ログアウト
      </Link>
    </div>
  );
};

export default Logout;
