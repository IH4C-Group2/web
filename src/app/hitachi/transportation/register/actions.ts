'use server';

import { prisma } from "@/utils/prisma";
import { SHA256 } from 'crypto-js';

import { safeParse } from 'valibot';
import { hitachiTransportatioRregiste } from "@/types/form/validation";

export type ErrorType = {
    status: boolean;
    message: string;
}

export const transportaion = async (formData: FormData): Promise<ErrorType> => {

    // フォームデータから値を取得
    const loginId = formData.get('loginId')?.toString();
    const password = formData.get('password')?.toString();
    const Username = formData.get('userName')?.toString();
    const address = formData.get('address')?.toString();
    const responsibleName = formData.get('responsibleName')?.toString();
    const officeTel = formData.get('officeTEL')?.toString();

    const { success } = safeParse(hitachiTransportatioRregiste, {
        address: address,
        loginId: loginId,
        officeTEL: officeTel,
        password: password,
        responsibleName: responsibleName,
        userName: Username
    });
    if (!success) {
        return { status: false, message: "入力フォーマットが違います" };
    }

    // 必須項目が全て揃っているか確認
    if (!loginId || !password || !Username || !address || !responsibleName || !officeTel) {
        console.log({ loginId, password, Username, address, responsibleName, officeTel });
        return {
            status: false,
            message: "入力されていない項目があります"
        };
    }

    try {
        // ログインIDが既に登録されているか確認
        const loginIdState = await prisma.factoryUser.findUnique({
            where: { loginId }
        });

        // 同じloginIdがなかったら（nullだったら）
        if (loginIdState == null) {
            // 新しいユーザーを登録
            const Register = await prisma.transportationUser.create({
                data: {
                    loginId,
                    password: SHA256(password).toString(),
                    UserName: Username,
                    companyId: null,
                    address,
                    responsibleName,
                    officeTel: officeTel
                }
            });

            if (!Register) return { status: false, message: "" };
        } else {
            return {
                status: false,
                message: ""
            };
        }

        return {
            status: true,
            message: ""
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return {
            status: false,
            message: ""
        };
    }
};
