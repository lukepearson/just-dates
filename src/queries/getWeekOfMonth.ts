import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the week of the month as a number
 * @example getWeekOfMonth({ year: 2020, month: 4, day: 14 })
 * // 2
 */
export const getWeekOfMonth = (date: DateObject): number => {
  checkArgs(date, 'date');
  return Math.ceil(date.day / 7);
};
