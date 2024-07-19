import { FC } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from '@/utils/prisma';
import DeleteButton from './(components)/delete';

const TransportationUsersList: FC = async () => {
  // データベースからTransportationUserのデータを取得
  const users = await prisma.transportationUser.findMany({
    include: { transportationDrivers: true }
  });

  // ユーザーが見つからない場合、404ページを表示
  if (!users) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header>
        <h1>運送会社一覧/編集</h1>
      </header>
      <div className="w-full flex justify-start mt-4 ml-4">
        <Link href="/hitachi/dashboard" className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ メニュー
        </Link>
      </div>
      <div className="w-full flex justify-end mt-4 mr-4">
        <Link href={'./register'} className="text-green-600">ユーザー新規登録</Link>
      </div>
      <div className="w-full bg-blue-900 mt-4 p-4">
        <table className="min-w-full bg-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-center">ログインID</th>
              <th className="border px-4 py-2 text-center">ユーザー名</th>
              <th className="border px-4 py-2 text-center">住所</th>
              <th className="border px-4 py-2 text-center">事務所TEL</th>
              <th className="border px-4 py-2 text-center">責任者名</th>
              <th className="border px-4 py-2 text-center">編集</th>
              <th className="border px-4 py-2 text-center">削除</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.transportationUserId}>
                <td className="border px-4 py-2 text-center">{user.loginId}</td>
                <td className="border px-4 py-2 text-center">{user.UserName}</td>
                <td className="border px-4 py-2 text-center">{user.address}</td>
                <td className="border px-4 py-2 text-center">{user.officeTel}</td>
                <td className="border px-4 py-2 text-center">{user.responsibleName}</td>
                <td className="border px-4 py-2 text-center"><Link href={`./edit/${user.transportationUserId}`} >編集</Link></td>
                <td className="border px-4 py-2 text-center"><DeleteButton id={user.transportationUserId} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransportationUsersList;
