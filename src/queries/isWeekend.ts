import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from './isSaturday';
import { isSunday } from './isSunday';

/**
 * Is the given DateObject a Saturday or Sunday?
 * @example
 * isWeekend({ year: 2020, month: 8, day: 23 })
 * // true
 */
export const isWeekend = (date: DateObject): boolean => {
  checkArgs(date, 'dateObject');
  return isSaturday(date) || isSunday(date);
};
