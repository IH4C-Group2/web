'use client';

import { useRouter } from 'next/navigation';
import { type FC, type PropsWithChildren } from 'react';
import { deleteSchedule } from '../actions';

type Props = {
  id: number,
};

const DelteButton: FC<PropsWithChildren<Props>> = ({ children, id }) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await deleteSchedule(id);
    router.refresh();
  };

  return (
    <>
      <button onClick={() => handleDelete(id)}>削除</button>
    </>
  )
}

export default DelteButton;
