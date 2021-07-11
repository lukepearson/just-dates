import { stringToNumber } from '../internal/stringToNumber';
import { MONDAY, Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Monday?
 * @example isMonday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isMonday: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDayOfWeek(date) === MONDAY;
};
