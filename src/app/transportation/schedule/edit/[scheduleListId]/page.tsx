import type { FC } from "react";
import { schedule } from './actions';
import Form from "./(components)/Form";
import DriverIdInput from "./(components)/DriverIdInput";
import OrderIdInput from "./(components)/OrderIdInput";
import TemperatureInput from "./(components)/TemperatureInput";
import StartLocationInput from "./(components)/StartLocationInput";
import StartDateTimeInput from "./(components)/StartDateTimeInput";
import EndLocationInput from "./(components)/EndLocationInput";
import EndDateTimeInput from "./(components)/EndDateTimeInput";
import SubmitInputBtn from "./(components)/SubmitInputBtn";

type Props = {
  pramas: { scheduleListId: string };
}
const UpdateSchedule: FC<Props> = ({pramas: { scheduleListId }}) => {

  const handleSubmit = async (formData: FormData) => {
    console.log("フォームの入力内容:", {
      driverId: formData.get('DriverIdInput'),
      orderId: formData.get('OrderIdInput'),
      Temperature: formData.get('TemperatureInput'),
      StartLocation: formData.get('StartLocationInput'),
      StartDateTime: formData.get('StartDateTimeInput'),
      EndLocation: formData.get('EndLocationInput'),
      EndDateTime: formData.get('EndDateTimeInput'),
      scheduleListId: scheduleListId,
    });
    const result = await schedule(formData,scheduleListId); // scheduleListId を引数として渡す
    return result;
  };

  return (
    <div className="min-h-screen">
      <h1>ドライバースケジュール更新</h1>
      {scheduleListId ? (
        <>
          <p>スケジュールID: {scheduleListId}</p>
          <Form action={handleSubmit}>
            <DriverIdInput />
            <OrderIdInput />
            <TemperatureInput />
            <StartLocationInput />
            <StartDateTimeInput />
            <EndLocationInput />
            <EndDateTimeInput />
            <SubmitInputBtn />
          </Form>
        </>
      ) : (
        <p>スケジュールIDが見つかりません。</p>
      )}
    </div>
  );
};

export default UpdateSchedule;
