import type { FC } from 'react';

const AddressInput: FC = () => {
    return (
        <div>
            <p>住所</p>
            <input type='text' name='address'/>
        </div>
    );
};

export default AddressInput;