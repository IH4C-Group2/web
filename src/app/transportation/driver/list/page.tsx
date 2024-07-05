'use client'; // クライアントサイドコンポーネントとしてマーク

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // 修正: next/navigationからuseRouterをインポート
import { getAllDrivers, deleteDriver } from './actions';

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
      <table className="min-w-full bg-white">
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
  );
};

export default DriverList;