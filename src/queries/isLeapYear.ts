import { DateObject } from '../dateObject';

export const isNumberLeapYear = (year: number): boolean =>
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

export const isLeapYear = (dateObject: DateObject): boolean => {
  return isNumberLeapYear(dateObject.year);
};
