import { FC } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from '@/utils/prisma';
import DeleteButton from './(components)/delete';

const FactoryListPage: FC = async () => {
  const users = await prisma.factoryUser.findMany({
    include: { factoryInfos: true },
    orderBy: {
      factoryName: 'asc'
    }
  });



  return (
    <div className='min-h-screen'>
      <p>工場一覧</p>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='border px-4 py-2 text-center'>会社名</th>
            <th className='border px-4 py-2 text-center'>工場名</th>
            <th className='border px-4 py-2 text-center'>住所</th>
            <th className='border px-4 py-2 text-center'>責任者</th>
            <th className='border px-4 py-2 text-center'>責任者TEL</th>
            <th className='border px-4 py-2 text-center'>事務所TEL</th>
            <th className='border px-4 py-2 text-center'>編集</th>
            <th className='border px-4 py-2 text-center'>削除</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
          user.factoryInfos.map((factory) => (
            <tr key={user.factoryUserId}>
              <td className='border px-4 py-2 text-center'>{user.factoryName}</td>
              <td className='border px-4 py-2 text-center'>{factory.factoryDetailName}</td>
              <td className='border px-4 py-2 text-center'>{factory.address}</td>
              <td className='border px-4 py-2 text-center'>{factory.responsibleName}</td>
              <td className='border px-4 py-2 text-center'>{factory.responsibleTel}</td>
              <td className='border px-4 py-2 text-center'>{factory.officeTel}</td>
              <td className='border px-4 py-2 text-center'>
                <Link href={`/hitachi/factory/edit/${factory.factoryUserId}`}>編集</Link>
              </td>
              <td className='border px-4 py-2 text-center'>
                <DeleteButton infoId={factory.factoryInfoId} userId={factory.factoryUserId}/>
              </td>
            </tr>
          ))
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default FactoryListPage;