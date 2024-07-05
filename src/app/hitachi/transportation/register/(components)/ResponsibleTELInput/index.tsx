import type { FC } from 'react';

const ResponsibleTELInput: FC = () => {
    return (
        <div>
            <p>責任者TEL</p>
            <input type='text' name='responsibleTEL' className="border border-black"/>
        </div>
    );
};

export default ResponsibleTELInput;