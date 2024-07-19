import type { FC } from 'react';

import SimpleMap from './SearchRouteMap';
import { prisma } from '@/utils/prisma';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

const Map: FC<Props> = async ({ params: { id }}) => {
  const schedule = await prisma.scheduleList.findFirst({
    where: {
      scheduleListId: Number(id),
    },
    include: {
      originFactory: true, landingFactory: true
    }
  });

  if (!schedule) notFound();

  return (
    <main className='w-full h-screen'>
      <SimpleMap departure={schedule.originFactory.address} destination={schedule.landingFactory.address} />
    </main>
  );
};

export default Map;
