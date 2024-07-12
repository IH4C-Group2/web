import type { FC } from 'react';

type Props = {
    defaultResponsibleName: string;
  };

const ResponsibleNameInput: FC <Props> = ({ defaultResponsibleName }) => {
    return (
        <div>
            <p>責任者</p>
            <input type='text' name='responsibleName' className="border border-black" defaultValue={defaultResponsibleName}/>
        </div>
    );
};

export default ResponsibleNameInput;