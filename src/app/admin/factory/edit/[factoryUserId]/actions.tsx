import { revalidatePath } from "next/cache";

import { prisma } from "@/utils/prisma";

export const edit = async (formData: FormData, factoryUserId: number) => {
    //factoryUser formData取得・確認
    const factoryName = formData.get('factoryName')?.toString();
    if(!factoryUserId || !factoryName){
        return false;
    }

    //factoryUser更新・確認
    const factoryUserUpdate = await prisma.factoryUser.update({
        where: {
            factoryUserId: Number(factoryUserId)
        },
        data: {
            factoryName: factoryName
        },
    });
    if(!factoryUserUpdate){
        return false;
    }

    //factoryInfo formData取得・確認
    const factoryInfo = await prisma.factoryInfo.findUnique({
        where: {
            factoryInfoId: Number(factoryUserId)
        },
        select: {
            factoryInfoId: true
        },
    });
    const factoryInfoId = factoryInfo?.factoryInfoId;
    const address = formData.get('address')?.toString();
    const responsibleName = formData.get('responsibleName')?.toString();
    const responsibleTel = formData.get('responsibleTel')?.toString();
    const officeTel = formData.get('officeTel')?.toString();
    if(!factoryInfoId || !address || !responsibleName || !responsibleTel || !officeTel){
        return false;
    }

    //factoryInfo更新・確認
    const factoryInfoUpdate = await prisma.factoryInfo.update({
        where: {
            factoryInfoId: Number(factoryInfoId)
        },
        data: {
            address: address,
            responsibleName: responsibleName,
            responsibleTel: responsibleTel,
            officeTel: officeTel
        },
    });
    if(!factoryInfoUpdate){
        return false;
    }

    revalidatePath(`/hitachi/factory/list/`, 'layout');
    return true;
};