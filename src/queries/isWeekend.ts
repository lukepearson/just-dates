import { stringToNumber } from '../internal/stringToNumber';
import { Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from './isSaturday';
import { isSunday } from './isSunday';

/**
 * Is the given DateObject a Saturday or Sunday?
 * @example
 * isWeekend({ year: 2020, month: 8, day: 23 })
 * // true
 */
export const isWeekend: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'dateObject');
  return isSaturday(date) || isSunday(date);
};
