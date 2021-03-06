import { stringToNumber } from '../internal/stringToNumber';
import { FRIDAY, Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Friday?
 * @example isFriday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isFriday: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDayOfWeek(date) === FRIDAY;
};
