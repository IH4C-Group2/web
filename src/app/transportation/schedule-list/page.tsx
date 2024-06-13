// page.tsx

'use client'; // クライアントサイドコンポーネントとしてマーク

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // 修正: next/navigationからuseRouterをインポート
import { getAllDriverSchedules } from './actions';

type DriverSchedule = {
  id: number;
  scheduleListId: number;
  driverId: string;
  orderId: string;
  temperature: string;
  startLocation: string;
  startDateTime: string;
  endLocation: string;
  endDateTime: string;
};

const DriverSchedulesPage: FC = () => {
  const [schedules, setSchedules] = useState<DriverSchedule[]>([]);
  const router = useRouter();

  // データを取得してステートにセットする
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDriverSchedules();
        setSchedules(data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchData();
  }, []);

  // 編集ページへの遷移関数
  const handleEdit = (id: number) => {
    router.push(`/sdledit/${id}`);
  };

  return (
    <div className="min-h-screen">
      <p>ドライバースケジュール一覧</p>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">スケジュールID</th>
            <th className="border px-4 py-2 text-center">ドライバーID</th>
            <th className="border px-4 py-2 text-center">オーダーID</th>
            <th className="border px-4 py-2 text-center">温度</th>
            <th className="border px-4 py-2 text-center">開始地点</th>
            <th className="border px-4 py-2 text-center">開始日時</th>
            <th className="border px-4 py-2 text-center">終了地点</th>
            <th className="border px-4 py-2 text-center">終了日時</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <td className="border px-4 py-2 text-center">{schedule.scheduleListId}</td>
              <td className="border px-4 py-2 text-center">{schedule.driverId}</td>
              <td className="border px-4 py-2 text-center">{schedule.orderId}</td>
              <td className="border px-4 py-2 text-center">{schedule.temperature}</td>
              <td className="border px-4 py-2 text-center">{schedule.startLocation}</td>
              <td className="border px-4 py-2 text-center">{new Date(schedule.startDateTime).toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">{schedule.endLocation}</td>
              <td className="border px-4 py-2 text-center">{new Date(schedule.endDateTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverSchedulesPage;
