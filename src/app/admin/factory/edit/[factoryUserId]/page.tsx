import type { FC } from 'react';

import { edit } from './actions';

import Form from './(components)/Form';
import FactoryNameInput from './(components)/FactoryNameInput';
import AddressInput from './(components)/AddressInput';
import ResponsibleNameInput from './(components)/ResponsibleNameInput';
import ResponsibleTELInput from './(components)/ResponsibleTELInput';
import OfficeTELInput from './(components)/OfficeTELInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';

import { prisma } from '@/utils/prisma';

type Props = {
    params: { 
        factoryUserId: number,
    };
};

const UpdateFactory: FC<Props> = async ({ params: { factoryUserId } }) => {
    const handleSubmit = async (formData: FormData) => {
        'use server';

        return await edit(formData, factoryUserId);
    };

    const factoryUser = await prisma.factoryUser.findUnique({
        where: { factoryUserId: Number(factoryUserId) },
    });

    const factoryInfo = await prisma.factoryInfo.findMany({
        where: { factoryUserId: Number(factoryUserId) },
        select: {
            address: true,
            responsibleName: true,
            responsibleTel: true,
            officeTel: true,
        }
    });

    return (
        <div className="min-h-screen">
            <h1>工場編集</h1>
            {factoryUser && factoryInfo ? (
                <>
                    <p>ファクトリーユーザID: {factoryUserId}</p>
                    <Form action={handleSubmit}>
                        <FactoryNameInput defaultFactoryName={factoryUser.factoryName}/>
                        <AddressInput defaultAddress={factoryInfo[0].address}/>
                        <ResponsibleNameInput defaultResponsibleName={factoryInfo[0].responsibleName}/>
                        <ResponsibleTELInput defaultResponsibleTEL={factoryInfo[0].responsibleTel}/>
                        <OfficeTELInput defaultOfficeTEL={factoryInfo[0].officeTel}/>
                        <SubmitInputBtn/>
                    </Form>
                </>
            ) : (
                <p>ファクトリーユーザIDが見つかりません。</p>
            )}
        </div>
    );
};

export default UpdateFactory;