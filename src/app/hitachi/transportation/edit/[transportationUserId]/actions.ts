import { prisma } from "@/utils/prisma";

export const edit = async (formData: FormData, transportationUserId: string) => {
  // formDataから値を取得
  const Loginid = formData.get('loginId')?.toString();
  const Password = formData.get('password')?.toString();
  const Username = formData.get('username')?.toString();
  const Address = formData.get('address')?.toString();
  const OfficeTEL = formData.get('officetel')?.toString();
  const ResponsibleName = formData.get('responsibleName')?.toString();

  // 必須フィールドが全て存在するか確認
  if (!Loginid || !Password || !Username || !Address || !OfficeTEL || !ResponsibleName || !transportationUserId) {
    return false;
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

    return true;
  } catch (error) {
    console.error("Error updating transportationUser:", error);
    return false;
  }
};
