import { FC } from 'react';
import Link from 'next/link';
import Logout from '@/app/layouts/Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faClockRotateLeft, } from '@fortawesome/free-solid-svg-icons';


const Dashboard: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header>
        <h1 className="">運送会社メニュー画面</h1>
      </header>
        <Logout />
      <div className="flex justify-center gap-10 mt-20">
        <Link href="/factory-management" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <FontAwesomeIcon icon={faIdCard} className="w-16 h-16 mb-2" />
          <span>ドライバー管理</span>
        </Link>
        <Link href="/delivery-schedule" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <FontAwesomeIcon icon={faClockRotateLeft} className="w-16 h-16 mb-2" />
          <span>ドライバー</span>
          <span>スケジュール管理</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;