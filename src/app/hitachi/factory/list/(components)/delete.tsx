'use client';

import { useRouter } from 'next/navigation';
import { type FC, type PropsWithChildren } from 'react';
import { deleteFactory } from '../actions';

type Props = {
    infoId: number;
    userId: number;
};

const deleteButton: FC<PropsWithChildren<Props>> = ({ children, infoId, userId }) => {
    const router = useRouter();

    const handleDelete = async (infoId: number, userId: number) => {
        await deleteFactory(infoId, userId);
        router.refresh();
    };

    return (
        <>
            <button onClick={() => handleDelete(infoId, userId)}>削除</button>
        </>
    )
}

export default deleteButton;
