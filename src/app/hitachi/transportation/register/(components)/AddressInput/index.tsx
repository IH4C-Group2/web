import type { FC } from 'react';

const AddressInput: FC = () => {
    return (
        <div>
            <input type='text' name='address' className="border border-black"/>
        </div>
    );
};

export default AddressInput;