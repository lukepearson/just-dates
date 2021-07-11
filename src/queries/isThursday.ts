import { stringToNumber } from '../internal/stringToNumber';
import { Query, THURSDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Thursday?
 * @example isThursday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isThursday: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDayOfWeek(date) === THURSDAY;
};
