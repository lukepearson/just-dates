import { stringToNumber } from '../internal/stringToNumber';
import { Query, TUESDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Tuesday?
 * @example isTuesday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isTuesday: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDayOfWeek(date) === TUESDAY;
};
