import { prisma } from "@/utils/prisma";

import { safeParse } from 'valibot';
import { hitachiTransportatioRregiste } from "@/types/form/validation";

export type ErrorType = {
  status: boolean;
  message: string;
}

export const edit = async (formData: FormData, transportationUserId: string): Promise<ErrorType> => {
  // formDataから値を取得
  const Loginid = formData.get('loginId')?.toString();
  const Password = formData.get('password')?.toString();
  const Username = formData.get('userName')?.toString();
  const Address = formData.get('address')?.toString();
  const OfficeTEL = formData.get('officeTEL')?.toString();
  const ResponsibleName = formData.get('responsibleName')?.toString();

  console.log(Loginid, Password, Username, Address, OfficeTEL, ResponsibleName);

  const { success } = safeParse(hitachiTransportatioRregiste, {
    address: Address,
    loginId: Loginid,
    officeTEL: OfficeTEL,
    password: Password,
    responsibleName: ResponsibleName,
    userName: Username
  });
  if (!success) {
    return { status: false, message: "入力フォーマットが違います" };
  }

  // 必須フィールドが全て存在するか確認
  if (!Loginid || !Password || !Username || !Address || !OfficeTEL || !ResponsibleName || !transportationUserId) {
    return {
      status: false,
      message: "入力されていない項目があります"
    };
  }

  // transportationUserIdを整数に変換
  const parsedTransportationUserId = parseInt(transportationUserId);

  // transportationUserを更新
  try {
    await prisma.transportationUser.update({
      where: {
        transportationUserId: parsedTransportationUserId,
      },
      data: {
        loginId: Loginid,
        password: Password,
        UserName: Username,
        address: Address,
        officeTel: OfficeTEL, // カラム名に合わせて修正
        responsibleName: ResponsibleName,
      },
    });

    return {
      status: true,
      message: ""
    };
  } catch (error) {
    console.error("Error updating transportationUser:", error);
    return {
      status: false,
      message: "データベースエラーが発生しました"
    };
  }
};
