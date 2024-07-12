'use client'; // クライアントサイドコンポーネントとしてマーク

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // 修正: next/navigationからuseRouterをインポート
import { getAllDrivers, deleteDriver } from './actions';
import Link from 'next/link';

type Driver = {
  driverId: number;
  employeeNum: string;
  driverName: string;
  driverTel: string;
  driverLicense: string;
};

const DriverList: FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const router = useRouter();

  // データを取得してステートにセットする
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDrivers();
        setDrivers(data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchData();
  }, []);

  // 編集ページへの遷移関数
  const handleEdit = (id: number) => {
    router.push(`/driveredit/${id}`);
  };

  // ドライバー削除関数
  const handleDelete = async (id: number) => {
    try {
      await deleteDriver(id);
      setDrivers(drivers.filter(driver => driver.driverId !== id)); // ドライバーリストを更新
    } catch (error) {
      console.error('Error deleting driver:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <header>
        <h1>ドライバー管理画面/編集</h1>
      </header>
      <div className="w-full flex justify-start mt-4 ml-4">
        <button type='submit' className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ メニュー
        </button>
      </div>
      <div className="w-full flex justify-end mt-4 mr-4">
      <Link href={'/transportation/driver/register'} className="text-green-600">ドライバー管理新規登録</Link>
      </div>
      <div className="w-full bg-blue-900 mt-4 p-4">
        <table className="min-w-full bg-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">社員番号</th>
            <th className="border px-4 py-2 text-center">ドライバー名</th>
            <th className="border px-4 py-2 text-center">電話番号</th>
            <th className="border px-4 py-2 text-center">免許証</th>
            <th className="border px-4 py-2 text-center">削除</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.driverId}>
              <td className="border px-4 py-2 text-center">{driver.employeeNum}</td>
              <td className="border px-4 py-2 text-center">{driver.driverName}</td>
              <td className="border px-4 py-2 text-center">{driver.driverTel}</td>
              <td className="border px-4 py-2 text-center">{driver.driverLicense}</td>
              <td className="border px-4 py-2 text-center"><button onClick={() => handleDelete(driver.driverId)}>削除</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DriverList;