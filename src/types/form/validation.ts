import FactoryNameInput from '@/app/hitachi/factory/register/(components)/FactoryNameInput';
import { pipe, object, string, number, minLength, maxLength, regex, minValue, integer, maxValue } from 'valibot';

//transportation
//transportationDriverRegister
export const transportationDriverRegisterSchema = object({
  loginId: pipe(
    string(),
    minLength(8, '8文字以上、15文字以下で入力してください'),
    maxLength(15, '8文字以上、15文字以下で入力してください'),
    regex(/^[a-zA-Z\d]+$/, '半角英数字のみを入力してください')
  ),
  password: pipe(
    string(),
    minLength(8, '8文字以上、30文字以下で入力してください'),
    maxLength(30, '8文字以上、30文字以下で入力してください'),
    regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/, '大文字、小文字、数字を最低1つずつ入力してください')
  ),
  employeeNum: pipe(
    string(),
    minLength(1, '1文字以上を入力してください'),
    regex(/^\d+$/, '数字のみを入力してください')
  ),
  driverName: pipe(
    string(),
    minLength(1, '1文字以上を入力してください')
  ),
  driverTel: pipe(
    string(),
    maxLength(14, '14文字以内で入力してください'),
    regex(/^(?=.*?-)(?=.*?\d)[-\d]+$/, '数字+ハイフンで入力してください')
  )
})

//transportationDriverEdit
export const transportationDriverEditSchema = object({
  employeeNum: pipe(
    string(),
    minLength(1, '1文字以上を入力してください'),
    regex(/^\d+$/, '数字のみを入力してください')
  ),
  driverName: pipe(
    string(),
    minLength(1, '1文字以上を入力してください')
  ),
  driverTel: pipe(
    string(),
    maxLength(14, '14文字以内で入力してください'),
    regex(/^(?=.*?-)(?=.*?\d)[-\d]+$/, '数字+ハイフンで入力してください')
  )
})

//transportationSchedule
export const transportationScheduleSchema = object({
  temperature: pipe(
    string(),
    minLength(1, '1文字以上入力してください'),
    regex(/^\d+$/, '数字のみを入力してください')
  )
})


//hitachi
//hitachiFactoryRegister
export const hitachiFactoryRegisterSchema = object({
  loginId: pipe(
    string(),
    minLength(8, '8文字以上、15文字以下で入力してください'),
    maxLength(15, '8文字以上、15文字以下で入力してください'),
    regex(/^[a-zA-Z\d]+$/, '半角英数字のみを入力してください')
  ),
  password: pipe(
    string(),
    minLength(8, '8文字以上、30文字以下で入力してください'),
    maxLength(30, '8文字以上、30文字以下で入力してください'),
    regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/, '大文字、小文字、数字を最低1つずつ入力してください')
  ),
  factoryName: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  ),
  factoryDetailName: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  ),
  address: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  ),
  responsibleName: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  ),
  officeTEL: pipe(
    string(),
    maxLength(14, '14文字以内で入力してください'),
    regex(/^(?=.*?-)(?=.*?\d)[-\d]+$/, '数字+ハイフンで入力してください')
  ),
  responsibleTEL: pipe(
    string(),
    maxLength(14, '14文字以内で入力してください'),
    regex(/^(?=.*?-)(?=.*?\d)[-\d]+$/, '数字+ハイフンで入力してください')
  ),
})

//hitachiTransportatioRregister
export const hitachiTransportatioRregiste = object({
  address: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  ),
  loginId: pipe(
    string(),
    minLength(8, '8文字以上、15文字以下で入力してください'),
    maxLength(15, '8文字以上、15文字以下で入力してください'),
    regex(/^[a-zA-Z\d]+$/, '半角英数字のみを入力してください')
  ),
  officeTEL: pipe(
    string(),
    maxLength(14, '14文字以内で入力してください'),
    regex(/^(?=.*?-)(?=.*?\d)[-\d]+$/, '数字+ハイフンで入力してください')
  ),
  password: pipe(
    string(),
    minLength(8, '8文字以上、30文字以下で入力してください'),
    maxLength(30, '8文字以上、30文字以下で入力してください'),
    regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/, '大文字、小文字、数字を最低1つずつ入力してください')
  ),
  responsibleName: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  ),
  // responsibleTEL: pipe(
  //   string(),
  //   maxLength(14, '14文字以内で入力してください'),
  //   regex(/^(?=.*?-)(?=.*?\d)[-\d]+$/, '数字+ハイフンで入力してください')
  // ),
  userName: pipe(
    string(),
    minLength(1, '1文字以上入力してください')
  )
})

//login
export const loginSchema = object({
  loginId: pipe(
    string(),
    minLength(8, '8文字以上、15文字以下で入力してください'),
    maxLength(15, '8文字以上、15文字以下で入力してください'),
    regex(/^[a-zA-Z\d]+$/, '半角英数字のみを入力してください')
  ),
  password: pipe(
    string(),
    minLength(8, '8文字以上、30文字以下で入力してください'),
    maxLength(30, '8文字以上、30文字以下で入力してください'),
    regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]+$/, '大文字、小文字、数字を最低1つずつ入力してください')
  )
})