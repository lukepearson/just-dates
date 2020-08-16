import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

export const isNumberLeapYear = (year: number): boolean =>
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

export const isLeapYear = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return isNumberLeapYear(date.year);
};
