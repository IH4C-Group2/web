import { pipe, object, string, number, minLength, maxLength, regex, minValue } from 'valibot';

// スキーマの定義
//共通
export const userSchema = object({
  loginId: pipe(
    string(),
    minLength(8, '8文字以上、15文字以下で入力してください'),
    maxLength(15, '8文字以上、15文字以下で入力してください'),
    regex(/^[a-zA-Z\d]$/, '半角英数字のみを入力してください')
  ),
  password: pipe(
    string(),
    minLength(8, '8文字以上、30文字以下で入力してください'),
    maxLength(30, '8文字以上、30文字以下で入力してください'),
    regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]$/, '大文字、小文字、数字を最低1つずつ入力してください')
  ),
});

//transportation
export const transportationScheme = object({
  employeeNum: pipe(
    number('数字のみ使用してください'),
    minValue(1, '1文字以上を入力してください'),
  ),
  driverName: pipe(
    string(),
    minLength(1, '1文字以上を入力してください')
  ),
  driverTel: pipe(
    string(),
    maxLength(14, '14文字以内で入力してください'),
    regex(/^[-\d]$/, '数字,ハイフンのみを入力してください')
  )
})
//factory

