import { DateObject, THURSDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Thursday?
 * @example isThursday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isThursday = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return getDayOfWeek(date) === THURSDAY;
};
