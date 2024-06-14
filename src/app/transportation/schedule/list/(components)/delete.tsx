'use client';

import { useRouter } from 'next/navigation';
import { useState, type FC, type PropsWithChildren } from 'react';

import { prisma } from '@/utils/prisma';

type Props = {
  id: number,
};

const DelteButton: FC<PropsWithChildren<Props>> = ({ children, id }) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await prisma.scheduleList.delete({
      where: {
        scheduleListId: id
      }
    });
    router.push('/transportation/schedule-list/');
  };

  return (
    <>
      <button onClick={() => handleDelete(id)}>削除</button>
    </>
  )
}

export default DelteButton;