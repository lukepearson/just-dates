import { DateObject, SUNDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Sunday?
 * @example isSunday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isSunday = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return getDayOfWeek(date) === SUNDAY;
};
