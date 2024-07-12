'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { deleteDriver } from './actions';

type Props = {
  id: number;
}

export const DeleteButton: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleClick = async () => {
    const res = await deleteDriver(id);
    if (res) {
      router.refresh();
    } else {
      window.confirm('このユーザーはスケジュールがある為削除できませんでした。');
    }
  };

  return (
    <button onClick={handleClick} className="text-red-600 hover:text-red-800">
      削除
    </button>
  );
};

export const CreateButton: FC = () => {
  const router = useRouter();

  const handleClick = async () => {
    router.push('/transportation/driver/register');
  };

  return (
    <button onClick={handleClick} className="text-green-600">ドライバー新規登録</button>
  );
};