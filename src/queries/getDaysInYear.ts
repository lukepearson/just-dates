import { isNumberLeapYear } from './isLeapYear';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the number of days in a given year
 * @example getDaysInYear(2020)
 * // 366
 * @example getDaysInYear(2019)
 * // 365
 */
export const getDaysInYear = (year: number) => {
  checkArgs(year, 'year');
  return isNumberLeapYear(year) ? 366 : 365;
};
