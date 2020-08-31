import { isNumberLeapYear } from './isLeapYear';
import { YearMonth, DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the number of days in a given DateObject, or YearMonth
 * The year value is required for leap years
 * @example getDaysInMonth({ year: 2020, month: 8, day: 23 })
 * // 31
 * @example getDaysInMonth({ year: 2020, month: 2 })
 * // 29
 */
export const getDaysInMonth = (date: YearMonth | DateObject): number => {
  checkArgs(date, 'date');
  let { year, month } = date;
  while (month < 1) {
    month += 12;
    year--;
  }
  const monthNum = ((month - 1) % 12) + 1;
  return {
    1: 31,
    2: isNumberLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }[monthNum];
};
