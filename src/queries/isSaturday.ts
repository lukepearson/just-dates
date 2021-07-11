import { stringToNumber } from '../internal/stringToNumber';
import { Query, SATURDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Saturday?
 * @example isSaturday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isSaturday: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDayOfWeek(date) === SATURDAY;
};
