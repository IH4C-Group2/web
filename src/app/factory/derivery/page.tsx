import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const DeliverySchedule: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="w-full bg-blue-900 text-white text-center py-6">
        <h1 className="text-2xl font-bold">ドライバースケジュール一覧/編集</h1>
      </header>
      <div className="flex justify-start w-full mt-5 p-4">
        <Link href="/logout" className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ メニュー
        </Link>
      </div>
      <div className="w-full px-10 mt-10 bg-blue-900 p-6">
        <div className="flex justify-end mb-4">
          <Link href="/new-delivery-schedule" className="text-green-500 text-xl hover:text-green-700 transition duration-300">
            ドライバースケジュール新規登録
          </Link>
        </div>
        <table className="w-full text-center border-collapse border border-gray-400 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-400 px-4 py-2">ドライバーID</th>
              <th className="border border-gray-400 px-4 py-2">名前</th>
              <th className="border border-gray-400 px-4 py-2">オーダーID</th>
              <th className="border border-gray-400 px-4 py-2">温度</th>
              <th className="border border-gray-400 px-4 py-2">発地</th>
              <th className="border border-gray-400 px-4 py-2">発日時予定</th>
              <th className="border border-gray-400 px-4 py-2">着地</th>
              <th className="border border-gray-400 px-4 py-2">着日時予定</th>
              <th className="border border-gray-400 px-4 py-2">編集</th>
              <th className="border border-gray-400 px-4 py-2">削除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2">
                <button className="text-blue-500">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button className="text-red-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliverySchedule;
