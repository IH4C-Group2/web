import type { FC } from 'react';

import { redirect } from 'next/navigation';

import { getUser } from '@/getters/user';

const Dashboard: FC = async () => {
  const user = await getUser();

  if (!user) redirect('/hitachi/login');

  return (
    <div className="min-h-screen">
      <h1>ダッシュボード</h1>
    </div>
  );
};

export default Dashboard;