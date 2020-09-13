import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Are the DateObjects in the same year?
 * @example isSameYear({ year: 1970, month: 3, day: 8 }, { year: 1970, month: 12, day: 6 })
 * // true
 */
export const isSameYear = (a: DateObject, b: DateObject): boolean => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return a.year === b.year;
};
