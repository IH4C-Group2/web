import type { FC } from 'react';

const FactoryDetailNameInput: FC = () => {
    return (
        <div>
            <p>工場名</p>
            <input type='text' name='factoryDetailName'/>
        </div>
    );
};

export default FactoryDetailNameInput;