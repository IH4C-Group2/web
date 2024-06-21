import type { FC } from 'react';

const LoginIdInput: FC = () => {
    return (
        <div>
            <p>ログインID</p>
            <input type='text' name='loginId'/>
        </div>
    );
};

export default LoginIdInput;