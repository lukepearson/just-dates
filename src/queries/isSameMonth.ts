import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Are the DateObjects in the same month?
 * @example isSameMonth({ year: 1970, month: 1, day: 6 }, { year: 1970, month: 1, day: 12 })
 * // true
 */
export const isSameMonth = (a: DateObject, b: DateObject): boolean => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return a.month === b.month && a.year === b.year;
};
