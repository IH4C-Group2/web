import type { FC } from 'react';

const ResponsibleNameInput: FC = () => {
    return (
        <div>
            <p>責任者</p>
            <input type='text' name='responsibleName'/>
        </div>
    );
};

export default ResponsibleNameInput;