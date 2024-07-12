import type { FC } from 'react';

type Props = {
    defaultLoginid: string;
};


const LoginIdInput: FC<Props> = ({ defaultLoginid }) => {
    return (
        <div>
            <p>ログインID</p>
            <input type='text' name='loginId' className="border border-black" defaultValue={defaultLoginid}/>
        </div>
    );
};

export default LoginIdInput;