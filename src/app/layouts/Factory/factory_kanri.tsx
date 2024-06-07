import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';



const Factorykanri = () => {
  return (
    <Link href="/factory-management" className="flex flex-col items-center justify-center w-48 h-48 bg-gray-400 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
          <FontAwesomeIcon icon={faHouseUser} className="w-16 h-16 mb-2" />
          <span>工場管理</span>
        </Link>
  );
};

export default Factorykanri;
