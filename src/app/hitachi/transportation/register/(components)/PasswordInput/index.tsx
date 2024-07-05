import type { FC } from 'react';

const PasswordInput: FC = () => {
    return (
        <div>
            <input type='password' name='password' className="border border-black"/>
        </div>
    );
};

export default PasswordInput;