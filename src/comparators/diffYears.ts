import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the number of full years between two dates
 * @example
 * diffYears({ year: 2020, month: 1, day: 1 }, { year: 2021, month: 12, day: 31 })
 * // 1
 */
export const diffYears = (a: DateObject, b: DateObject): number => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return Math.abs(a.year - b.year);
};