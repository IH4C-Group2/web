import type { FC } from 'react';

import { edit } from './actions';
import Form from './(components)/Form';
import LoginIdInput from './(components)/LoginIdInput';
import PasswordInput from './(components)/PasswordInput';
import UserNameInput from './(components)/UserNameInput';
import AddressInput from './(components)/AddressInput';
import OfficeTELInput from './(components)/OfficeTELInput';
import ResponsibleNameInput from './(components)/ResponsibleNameInput';
import SubmitInputBtn from './(components)/SubmitInputBtn';
import { prisma } from '@/utils/prisma';
import { getTransportationUser } from '@/getters/user';

type Props = {
  params: { transportationUserId: string };
};

const UpdatetransportationUser: FC<Props> = async ({ params: { transportationUserId } }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    return await edit(formData, transportationUserId);
  };

  const user = await getTransportationUser();
  const userinfo = await prisma.transportationUser.findUnique({
    where: { transportationUserId: Number(transportationUserId) },
  });

  return (
    <div className="min-h-screen">
      <h1>運送会社ユーザー編集</h1>
      {userinfo ? (
        <>
          <p>ユーザーID: {transportationUserId}</p>
          <Form action={handleSubmit}>
            <LoginIdInput defaultLoginid={userinfo.loginId} />
            <PasswordInput />
            <UserNameInput defaultusername={userinfo.UserName} />
            <AddressInput defaultaddress={userinfo.address} />
            <OfficeTELInput defaulofficeTel={userinfo.officeTel} />
            <ResponsibleNameInput defaultResponsibleName={userinfo.responsibleName} />
            <SubmitInputBtn />
          </Form>
        </>
      ) : (
        <p>ユーザーが見つかりません。</p>
      )}
    </div>
  );
};

export default UpdatetransportationUser;
