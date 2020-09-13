import { checkArgs } from '../internal/checkArgs';
import { DateObject } from '../dateObject';
import { getDaysInMonth } from './getDaysInMonth';

/**
 * Is the given DateObject on the last day of its month
 * @example isLastDayOfMonth({ year: 2020, month: 2, day: 28 })
 * // false
 */
export const isLastDayOfMonth = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return getDaysInMonth(date) === date.day;
};
