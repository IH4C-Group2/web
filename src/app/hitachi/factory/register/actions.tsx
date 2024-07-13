'use server';

import { prisma } from "@/utils/prisma";
import { SHA256 } from 'crypto-js';

import { safeParse } from 'valibot';
import { hitachiFactoryRegisterSchema } from "@/types/form/validation";

export type ErrorType = {
    status: boolean;
    message: string;
}

export const factoryRegister = async (formData: FormData): Promise<ErrorType> => {
    //factoryUser formData取得
    const loginId = formData.get('loginId')?.toString();
    const password = formData.get('password')?.toString();
    const factoryName = formData.get('factoryName')?.toString();

    //factoryUser formData中身の有無
    if (!loginId || !password || !factoryName) {
        console.log({ loginId, password, factoryName });
        return {
            status: false,
            message: ''
        };
    }

    //factoryUserにloginIdが存在するかどうか
    const loginIdState = await prisma.factoryUser.findUnique({
        where: { loginId }
    });

    //同じloginIdがなかったら（nullだったら）
    if (loginIdState == null) {
        //factoryUser formData登録
        const factoryUser = await prisma.factoryUser.create({
            data: {
                loginId,
                password: SHA256(password).toString(),
                factoryName
            }
        });

        if (!factoryUser) return { status: false, message: '' };
    } else {
        return {
            status: false,
            message: ''
        };
    }

    //factoryInfo formData取得
    const factoryUser = await prisma.factoryUser.findUnique({
        where: { loginId },
        select: {
            factoryUserId: true,
            loginId: false,
            password: false,
            factoryName: false,
            companyId: false
        }
    });
    const factoryUserId = factoryUser?.factoryUserId;
    const factoryDetailName = formData.get('factoryDetailName')?.toString();
    const address = formData.get('address')?.toString();
    const responsibleName = formData.get('responsibleName')?.toString();
    const responsibleTel = formData.get('responsibleTEL')?.toString();
    const officeTel = formData.get('officeTEL')?.toString();

    const { success } = safeParse(hitachiFactoryRegisterSchema, {
        loginId: loginId,
        password: password,
        factoryName: factoryName,
        factoryDetailName: factoryDetailName,
        address: address,
        responsibleName: responsibleName,
        officeTEL: officeTel,
        responsibleTEL: responsibleTel
    });
    if (!success) {
        return { status: false, message: "入力フォーマットが違いますyo" };
    }

    //factoryInfo formData中身の有無
    if (!factoryUserId || !factoryDetailName || !address || !responsibleName || !responsibleTel || !officeTel) {
        console.log({ factoryUserId, factoryDetailName, address, responsibleName, responsibleTel, officeTel });
        return {
            status: false,
            message: '入力フォーマットが違います'
        };
    }

    const factoryInfo = await prisma.factoryInfo.create({
        data: {
            factoryUserId,
            factoryDetailName,
            address,
            responsibleName,
            responsibleTel,
            officeTel
        }
    });

    if (!factoryInfo) return {
        status: false,
        message: ''
    }

    return {
        status: true,
        message: ''
    };
};
