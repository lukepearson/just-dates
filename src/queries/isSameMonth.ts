import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, StringDateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Are the DateObjects in the same month of the same year?
 * @example isSameMonth({ year: 1970, month: 1, day: 6 }, { year: 1970, month: 1, day: 12 })
 * // true
 */
export const isSameMonth = (
  a: DateObject | StringDateObject,
  b: DateObject | StringDateObject
): boolean => {
  [a, b] = stringToNumber([a, b]);
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return a.month === b.month && a.year === b.year;
};
