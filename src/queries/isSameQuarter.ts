import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getQuarter } from './getQuarter';

/**
 * Are the DateObjects in the same quarter of the same year?
 * @example isSameQuarter({ year: 1970, month: 1, day: 6 }, { year: 1970, month: 3, day: 12 })
 * // true
 */
export const isSameQuarter = (a: DateObject, b: DateObject): boolean => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return getQuarter(a) === getQuarter(b) && a.year === b.year;
};
