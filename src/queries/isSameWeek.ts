import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, StringDateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getCalendarWeek } from './getCalendarWeek';

/**
 * Are the DateObjects in the same calendar week of the same year?
 * @example isSameWeek({ year: 1970, month: 3, day: 8 }, { year: 1970, month: 3, day: 10 })
 * // true
 */
export const isSameWeek = (
  a: DateObject | StringDateObject,
  b: DateObject | StringDateObject
): boolean => {
  [a, b] = stringToNumber([a, b]);
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return getCalendarWeek(a) === getCalendarWeek(b) && a.year === b.year;
};
