import type { FC } from 'react';

import { edit } from './actions';
import { prisma } from '@/utils/prisma';

import Form from './(components)/Form';
import EmployeeNumInput from './(components)/EmployeeNumInput';
import DriverNameInput from './(components)/DriverNameInput';
import DriverTelInput from './(components)/DriverTelInput';
import DriverLicenseInput from './(components)/DriverLicenseInput';

type Props = {
  params: { driverId: string };
};

const Edit: FC<Props> = async ({ params: { driverId } }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    return await edit(formData, driverId);
  };

  const driver = await prisma.transportationDriver.findUnique({
    where: { driverId: Number(driverId) },
  });

  return (
    <div>
      <h1>ドライバー登録画面</h1>
      {driver ? (
        <>
          <p>ドライバーID: {driverId}</p>
          <Form action={handleSubmit}>
            <EmployeeNumInput defaultEmployeeNum={driver.employeeNum} />
            <DriverNameInput defaultDriverName={driver.driverName} />
            <DriverTelInput defaultDriverTel={driver.driverTel} />
            <DriverLicenseInput defaultDriverLicense={driver.driverLicense} />
            <button type="submit">登録</button>
          </Form>
        </>
      ) : (
        <p>ドライバーIDが見つかりません。</p>
      )}
    </div>
  );

};

export default Edit;