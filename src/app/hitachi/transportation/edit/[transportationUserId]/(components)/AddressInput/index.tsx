import type { FC } from 'react';

type Props = {
    defaultaddress: string;
};

const AddressInput: FC<Props> = ({ defaultaddress }) => {
    return (
        <div>
            <p>住所</p>
            <input type='text' name='address' className="border border-black" defaultValue={defaultaddress}/>
        </div>
    );
};

export default AddressInput;