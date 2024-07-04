import type { FC } from 'react';

const LoginIdInput: FC = () => {
    return (
        <div>
            <p>ログインID</p>
            <input type='text' name='loginId'  className="border border-black"/>
        </div>
    );
};

export default LoginIdInput;