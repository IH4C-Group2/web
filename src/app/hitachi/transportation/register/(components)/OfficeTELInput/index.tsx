import type { FC } from 'react';

const OfficeTELInput: FC = () => {
    return (
        <div>
            <p>事務所TEL</p>
            <input type='text' name='officeTEL' className="border border-black"/>
        </div>
    );
};

export default OfficeTELInput;