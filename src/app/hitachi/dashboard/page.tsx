import { FC } from 'react';
import Link from 'next/link';
import Logout from '@/app/layouts/Logout';
import Factorykanri from '@/app/layouts/Factory/factory_kanri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faBoxesStacked, faBuildingUser,} from '@fortawesome/free-solid-svg-icons';

const Dashboard: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header>
        <h1>管理者メニュー画面</h1>
      </header>
        <Logout />
      <div className="flex justify-center gap-10 mt-20">
      <Link href="/hitachi/transportation/list" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <FontAwesomeIcon icon={faBuildingUser} className="w-16 h-16 mb-2" />
          <span>運送会社管理登録</span>
        </Link>
        <Link href="/hitachi/factory/list" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <FontAwesomeIcon icon={faHouseUser} className="w-16 h-16 mb-2" />
          <span>工場管理</span>
        </Link>
        <Link href="/transportation/schedule/list" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <FontAwesomeIcon icon={faBoxesStacked} className="w-16 h-16 mb-2" />
          <span>運送スケジュール一覧</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;