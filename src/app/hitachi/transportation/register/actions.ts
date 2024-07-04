'use server';

import { prisma } from "@/utils/prisma";
import { SHA256 } from 'crypto-js';

export const transportaion = async (formData: FormData) => {

    // フォームデータから値を取得
    const loginId = formData.get('loginId')?.toString();
    const password = formData.get('password')?.toString();
    const Username = formData.get('username')?.toString();

    // 必須項目が全て揃っているか確認
    if (!loginId || !password || !Username) {
        console.log({ loginId, password, Username });
        return false;
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
                    companyId: null
                }
            });

            if (!Register) return false;
        } else {
            return false;
        }

        return true;
    } catch (error) {
        console.error("Error during registration:", error);
        return false;
    }
};
