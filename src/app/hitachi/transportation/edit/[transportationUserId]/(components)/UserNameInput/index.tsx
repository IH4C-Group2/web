import type { FC } from 'react';

type Props = {
    defaultusername: string;
  };

const UserNameInput: FC <Props>= ({ defaultusername}) => {
    return (
        <div>
            <p>ユーザー名</p>
            <input type='text' name='username' className="border border-black" defaultValue={defaultusername}/>
        </div>
    );
};

export default UserNameInput;