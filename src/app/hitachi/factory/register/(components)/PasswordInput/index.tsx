import type { FC } from 'react';

const PasswordInput: FC = () => {
    return (
        <div>
            <p>パスワード</p>
            <input type='password' name='password'/>
        </div>
    );
};

export default PasswordInput;