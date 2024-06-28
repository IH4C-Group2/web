export const toDateTimeLocalString = (date: Date): string => {
  const pad = (number: number) => (number < 10 ? '0' : '') + number;

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};