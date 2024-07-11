import type { FC } from 'react';

type Props = {
    defaultResponsibleTEL: string;
};

const ResponsibleTELInput: FC<Props> = ({ defaultResponsibleTEL }) => {
    return (
        <div>
            <p>責任者TEL</p>
            <input type="text" name="responsibleTel" defaultValue={defaultResponsibleTEL}/>
        </div>
    );
};

export default ResponsibleTELInput;