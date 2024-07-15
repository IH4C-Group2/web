import type { FC } from 'react';

type Props = {
    defaultAddress: string;
};

const AddressInput: FC<Props> = ({ defaultAddress }) => {
    return (
        <div>
            <p>住所</p>
            <input type="text" name="address" defaultValue={defaultAddress}/>
        </div>
    );
};

export default AddressInput;