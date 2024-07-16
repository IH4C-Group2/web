import type { FC } from 'react';

type Props = {
  message?: string;
};

const ErrorMessage: FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;