import type { FC } from 'react';

const FactoryNameInput: FC = () => {
    return (
        <div>
            <p>工場名</p>
            <input type='text' name='factoryName'/>
        </div>
    );
};

export default FactoryNameInput;