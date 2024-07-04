import type { FC } from 'react';

const PasswordInput: FC = () => {
    return (
        <div>
            <p>パスワード</p>
            <input type='password' name='password' className="border border-black"/>
        </div>
    );
};

export default PasswordInput;