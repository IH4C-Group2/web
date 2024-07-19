import type { FC } from 'react';

type Props = {
    defaultOfficeTEL: string;
};

const OfficeTELInput: FC<Props> = ({ defaultOfficeTEL }) => {
    return (
        <div>
            <p>事務所TEL</p>
            <input type="text" name="officeTel" defaultValue={defaultOfficeTEL}/>
        </div>
    );
};

export default OfficeTELInput;