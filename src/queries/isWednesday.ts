import { DateObject, WEDNESDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Wednesday?
 * @example isWednesday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isWednesday = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return getDayOfWeek(date) === WEDNESDAY;
};
