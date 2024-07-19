import type { FC } from 'react';

type Props = {
    defaultFactoryName: string;
};

const FactoryNameInput: FC<Props> = ({ defaultFactoryName }) => {
    return (
        <div>
            <p>工場名</p>
            <input type="text" name="factoryName" defaultValue={defaultFactoryName}/>
        </div>
    );
};

export default FactoryNameInput;