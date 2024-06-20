import type { FC } from 'react';

const FactoryDetailNameInput: FC = () => {
    return (
        <div>
            <p>荷主名</p>
            <input type='text' name='factoryDetailName'/>
        </div>
    );
};

export default FactoryDetailNameInput;