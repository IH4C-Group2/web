import type { FC } from 'react';
import Link from 'next/link';
import Logout from '@/app/layouts/Logout';

const Dashboard: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="w-full bg-blue-900 text-white text-center py-2 relative">
        <h1 className="text-2xl font-bold">工場メニュー画面</h1>
        <Logout />
      </header>
      <div className="flex justify-center gap-10 mt-20">
        <Link href="/factory-management" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <div className="w-16 h-16 mb-2 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('/icons/home-icon.png')" }} />
          <span>工場管理</span>
        </Link>
        <Link href="/delivery-schedule" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <div className="w-16 h-16 mb-2 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('/icons/box-icon.png')" }} />
          <span>運送スケジュール一覧</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
