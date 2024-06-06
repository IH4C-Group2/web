import type { FC } from 'react';

import { redirect } from 'next/navigation';

import { getTransportationUser } from '@/getters/user';

const Dashboard: FC = async () => {
  const user = await getTransportationUser();

  if (!user) redirect('/login');

  return (
    <div className="min-h-screen">
      <h1>ダッシュボード</h1>
      <p>ようこそ {user.UserName}</p>
    </div>
  );
};

export default Dashboard;