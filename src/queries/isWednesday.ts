import { stringToNumber } from '../internal/stringToNumber';
import { Query, WEDNESDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Wednesday?
 * @example isWednesday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isWednesday: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDayOfWeek(date) === WEDNESDAY;
};
