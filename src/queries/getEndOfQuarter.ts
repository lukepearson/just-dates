import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDaysInMonth } from './getDaysInMonth';

/**
 * Returns the the last day of the quarter as a DateObject
 * @example getEndOfQuarter({ year: 2020, month: 8, day: 23 })
 * // { year: 2020, month: 8, day: 31 }
 */
export const getEndOfQuarter = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  const q = Math.ceil(date.month / 3);
  return { year: date.year, month: q * 3, day: getDaysInMonth(date) };
};
