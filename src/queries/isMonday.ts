import { DateObject, MONDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Is the DateObject a Monday?
 * @example isMonday({ year: 1970, month: 1, day: 6 })
 * // false
 */
export const isMonday = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return getDayOfWeek(date) === MONDAY;
};
