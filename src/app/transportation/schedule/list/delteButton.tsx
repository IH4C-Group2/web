
import React from 'react';

interface DeleteButtonProps {
  id: number;
  deleteFunction: (id: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteFunction }) => {
  const handleClick = () => {
    if (window.confirm('本当に削除しますか？')) {
      deleteFunction(id);
    }
  };

  return (
    <button onClick={handleClick} className="text-red-600 hover:text-red-800">
      削除
    </button>
  );
};

export default DeleteButton;
