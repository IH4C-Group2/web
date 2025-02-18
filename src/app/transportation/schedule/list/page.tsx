import { FC } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from '@/utils/prisma';
import DelteButton from './(components)/delete';

const DriverSchedulesPage: FC = async () => {
  const schedules = await prisma.scheduleList.findMany({
    include: { driver: true, originFactory: true, landingFactory: true }
  });

  if (!schedules) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header>
        <h1>スケジュール一覧/編集</h1>
      </header>
      <div className="w-full flex justify-start mt-4 ml-4">
        <Link href="/transportation/dashboard" className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ メニュー
        </Link>
      </div>
      <div className="w-full flex justify-end mt-4 mr-4">
      <Link href={'/transportation/schedule/register'} className="text-green-600">ドライバースケジュール新規登録</Link>
      </div>
      <div className="w-full bg-blue-900 mt-4 p-4">
        <table className="min-w-full bg-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-center">ドライバーID</th>
              <th className="border px-4 py-2 text-center">名前</th>
              <th className="border px-4 py-2 text-center">オーダーID</th>
              <th className="border px-4 py-2 text-center">温度</th>
              <th className="border px-4 py-2 text-center">発地</th>
              <th className="border px-4 py-2 text-center">発日時予定</th>
              <th className="border px-4 py-2 text-center">着地</th>
              <th className="border px-4 py-2 text-center">着日時予定</th>
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
                <td className="border px-4 py-2 text-center">{schedule.landingFactory.factoryDetailName}</td>
                <td className="border px-4 py-2 text-center">{new Date(schedule.endDatetime).toLocaleString()}</td>
                <td className="border px-4 py-2 text-center"><Link href={`/transportation/schedule/edit/${schedule.scheduleListId}`} >編集</Link></td>
                <td className="border px-4 py-2 text-center"><DelteButton id={schedule.scheduleListId} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverSchedulesPage;
