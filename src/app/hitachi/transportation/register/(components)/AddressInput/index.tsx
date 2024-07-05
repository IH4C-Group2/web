import type { FC } from 'react';

const AddressInput: FC = () => {
    return (
        <div>
            <p>住所</p>
            <input type='text' name='address' className="border border-black"/>
        </div>
    );
};

export default AddressInput;