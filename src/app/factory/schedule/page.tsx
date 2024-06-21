import { FC } from 'react';

import { prisma } from '@/utils/prisma';

const SchedulesPage: FC = async () => {
  const schedules = await prisma.scheduleList.findMany({
    include: { driver: true }
  });

  return (
    <div className="min-h-screen">
      <p>スケジュール一覧</p>
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
