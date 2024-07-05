import type { FC } from 'react';

const UserNameInput: FC = () => {
    return (
        <div>
            <input type='text' name='username' className="border border-black"/>
        </div>
    );
};

export default UserNameInput;