import { FC } from 'react';
import { DeleteButton, CreateButton } from './Buttons';
import { getTransportationUser } from '@/getters/user';
import { prisma } from "@/utils/prisma";

const DriverList: FC = async () => {
  const transportationUser = await getTransportationUser();
  const drivers = await prisma.transportationDriver.findMany({
    where: { transportationUserId: transportationUser?.transportationUserId },
    select: {
      driverId: true,
      employeeNum: true,
      driverName: true,
      driverTel: true,
      driverLicense: true
    }
  });

  const formatDrivers= drivers.map(driver => ({
    driverId: driver.driverId,
    employeeNum: driver.employeeNum,
    driverName: driver.driverName,
    driverTel: driver.driverTel,
    driverLicense: driver.driverLicense
  }));

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="w-full bg-blue-900 text-white text-center py-6">
        <h1 className="text-2xl font-bold">ドライバー 一覧</h1>
      </header>
      <div className="w-full flex justify-start mt-4 ml-4">
        <button type='submit' className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ メニュー
        </button>
      </div>
      <div className="w-full flex justify-end mt-4 mr-4">
      <button type='submit' className="text-green-600">ドライバー新規登録</button>
      </div>
      
      <div className="w-full bg-blue-900 mt-4 p-4">
        <table className="min-w-full bg-gray-300">
          <thead>
=======
    <div className="min-h-screen">
      <header>
        <h1>ドライバー管理画面/編集</h1>
      </header>
      <table className="min-w-full bg-white">
        <thead>
>>>>>>> 4a562d775b823f31c3943d5ccd3fc859bea5775e
          <tr>
            <th className="border px-4 py-2 text-center">社員番号</th>
            <th className="border px-4 py-2 text-center">ドライバー名</th>
            <th className="border px-4 py-2 text-center">電話番号</th>
            <th className="border px-4 py-2 text-center">免許証</th>
            <th className="border px-4 py-2 text-center">削除</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.driverId}>
              <td className="border px-4 py-2 text-center">{driver.employeeNum}</td>
              <td className="border px-4 py-2 text-center">{driver.driverName}</td>
              <td className="border px-4 py-2 text-center">{driver.driverTel}</td>
              <td className="border px-4 py-2 text-center">{driver.driverLicense}</td>
              <td className="border px-4 py-2 text-center"><button onClick={() => handleDelete(driver.driverId)}>削除</button></td>
=======
    <div className="min-h-screen flex flex-col items-center bg-white">
      <header className="w-full bg-blue-900 text-white text-center py-6">
        <h1 className="text-2xl font-bold">ドライバー 一覧</h1>
      </header>
      <div className="w-full flex justify-start mt-4 ml-4">
        <button type='submit' className="text-black text-xl hover:text-gray-500 hover:shadow-lg transition duration-300">
          ≪ メニュー
        </button>
      </div>
      <div className="w-full flex justify-end mt-4 mr-4">
        <CreateButton />
      </div>

      <div className="w-full bg-blue-900 mt-4 p-4">
        <table className="min-w-full bg-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-center">社員番号</th>
              <th className="border px-4 py-2 text-center">ドライバー名</th>
              <th className="border px-4 py-2 text-center">電話番号</th>
              <th className="border px-4 py-2 text-center">免許証</th>
              <th className="border px-4 py-2 text-center">削除</th>
>>>>>>> main
            </tr>
          </thead>
          <tbody>
            {formatDrivers.map(driver => (
              <tr key={driver.driverId}>
                <td className="border px-4 py-2 text-center">{driver.employeeNum}</td>
                <td className="border px-4 py-2 text-center">{driver.driverName}</td>
                <td className="border px-4 py-2 text-center">{driver.driverTel}</td>
                <td className="border px-4 py-2 text-center">{driver.driverLicense}</td>
                <td className="border px-4 py-2 text-center"><DeleteButton id={driver.driverId} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default DriverList;