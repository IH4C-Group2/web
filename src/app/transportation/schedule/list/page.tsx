import { FC } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from '@/utils/prisma';
import DelteButton from './(components)/delete';

const DriverSchedulesPage: FC = async () => {
  const schedules = await prisma.scheduleList.findMany({
    include: { driver: true, originFactory: true }
  });

  if (!schedules) return notFound();

  return (
    <div className="min-h-screen">
      <p>ドライバースケジュール一覧</p>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">スケジュールID</th>
            <th className="border px-4 py-2 text-center">ドライバー</th>
            <th className="border px-4 py-2 text-center">オーダーID</th>
            <th className="border px-4 py-2 text-center">温度</th>
            <th className="border px-4 py-2 text-center">開始地点</th>
            <th className="border px-4 py-2 text-center">開始日時</th>
            <th className="border px-4 py-2 text-center">終了地点</th>
            <th className="border px-4 py-2 text-center">終了日時</th>
            <th className="border px-4 py-2 text-center">編集</th>
            <th className="border px-4 py-2 text-center">削除</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.scheduleListId}>
              <td className="border px-4 py-2 text-center">{schedule.scheduleListId}</td>
              <td className="border px-4 py-2 text-center">{schedule.driver.driverName}</td>
              <td className="border px-4 py-2 text-center">{schedule.orderId}</td>
              <td className="border px-4 py-2 text-center">{schedule.temperature}</td>
              <td className="border px-4 py-2 text-center">{schedule.originFactory.factoryDetailName}</td>
              <td className="border px-4 py-2 text-center">{new Date(schedule.startDatetime).toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">{schedule.landingFactoryId}</td>
              <td className="border px-4 py-2 text-center">{new Date(schedule.endDatetime).toLocaleString()}</td>
              <td className="border px-4 py-2 text-center"><Link href={`/transportation/schedule/edit/${schedule.scheduleListId}`} >編集</Link></td>
              <td className="border px-4 py-2 text-center"><DelteButton id={schedule.scheduleListId} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverSchedulesPage;
