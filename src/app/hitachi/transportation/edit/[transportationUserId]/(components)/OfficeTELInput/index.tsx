import type { FC } from 'react';

type Props = {
    defaulofficeTel: string;
  };

const OfficeTELInput: FC<Props> = ({ defaulofficeTel }) => {
    return (
        <div>
            <p>事務所TEL</p>
            <input type='text' name='officetel' className="border border-black" defaultValue={defaulofficeTel}/>
        </div>
    );
};

export default OfficeTELInput;