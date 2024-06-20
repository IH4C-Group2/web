import type { FC } from 'react';

const OfficeTELInput: FC = () => {
    return (
        <div>
            <p>事務所TEL</p>
            <input type='text' name='officeTEL' required />
        </div>
    );
};

export default OfficeTELInput;