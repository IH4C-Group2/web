import type { FC } from 'react';

const FactoryNameInput: FC = () => {
    return (
        <div>
            <p>荷主名</p>
            <input type='text' name='factoryName' required />
        </div>
    );
};

export default FactoryNameInput;