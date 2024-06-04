import Link from 'next/link';

const Logout = () => {
  return (
    <Link href="/logout" className="absolute flex items-center top-60 left-5 text-black">
      ≪ ログアウト
    </Link>
  );
};

export default Logout;