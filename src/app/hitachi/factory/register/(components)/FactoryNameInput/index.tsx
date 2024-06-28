import type { FC } from 'react';

const FactoryNameInput: FC = () => {
    return (
        <div>
            <p>会社名</p>
            <input type='text' name='factoryName'/>
        </div>
    );
};

export default FactoryNameInput;