'use server';

import { prisma } from "@/utils/prisma";
import { getFactoryUser } from '@/getters/user';

export const factoryRegister = async (formData: FormData) => {
    const factoryUserId = await getFactoryUser();
    //const factoryUserId = 1;
    const factoryDetailName = formData.get('factoryName')?.toString();
    const address = formData.get('address')?.toString();
    const responsibleName = formData.get('responsibleName')?.toString();
    const responsibleTel = formData.get('responsibleTEL')?.toString();
    const officeTel = formData.get('officeTEL')?.toString();

    if (!factoryUserId || !factoryDetailName || !address || !responsibleName || !responsibleTel || !officeTel){
        console.log({factoryUserId, factoryDetailName, address, responsibleName, responsibleTel, officeTel});
        return false;
    }

    const factory = await prisma.factoryInfo.create({
        data: {
            factoryUserId: Number(factoryUserId?.factoryUserId),
            factoryDetailName,
            address,
            responsibleName,
            responsibleTel,
            officeTel
        }
    });

    if (!factory) return false;

    return true;
};