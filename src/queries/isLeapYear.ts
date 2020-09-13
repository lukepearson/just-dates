import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Is the year number a leap year?
 * @example isLeapYear(2019)
 * // false
 */
export const isNumberLeapYear = (year: number): boolean =>
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

/**
 * Is the DateObject a leap year?
 * @example isLeapYear({ year: 2020, month: 1, day: 6 })
 * // true
 */
export const isLeapYear = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return isNumberLeapYear(date.year);
};
