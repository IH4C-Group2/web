import { FC } from 'react';

import { prisma } from '@/utils/prisma';

const SchedulesPage: FC = async () => {
  const schedules = await prisma.scheduleList.findMany({
    include: { driver: true }
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
    <header>
      <h1>運送スケジュール一覧</h1>
    </header>
    <div className="w-full flex justify-start mt-4 ml-4">
      <button type='submit' className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
        ≪ メニュー
      </button>
    </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">オーダーID</th>
            <th className="border px-4 py-2 text-center">ドライバー名</th>
            <th className="border px-4 py-2 text-center">終了日時</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.scheduleListId}>
              <td className="border px-4 py-2 text-center">{schedule.orderId}</td>
              <td className="border px-4 py-2 text-center">{schedule.driver.driverName}</td>
              <td className="border px-4 py-2 text-center">{new Date(schedule.endDatetime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchedulesPage;
