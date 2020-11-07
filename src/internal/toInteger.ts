import { DateObject } from 'src/dateObject';

export const toInteger = ({ year, month, day }: DateObject) => ({
  year: parseInt(String(year)),
  month: parseInt(String(month)),
  day: parseInt(String(day)),
});
