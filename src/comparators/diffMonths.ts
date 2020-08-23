import { DateObject } from '../dateObject';
import { isAfter } from './isAfter';
import { diff } from './diff';

/**
 * Returns the number of full months between two dates
 * @example
 * diffMonths({ year: 2020, month: 1, day: 1 }, { year: 2020, month: 1, day: 10 })
 * // 1
 */
export const diffMonths = (a: DateObject, b: DateObject): number => {
  const d = isAfter(a, b) ? diff(a, b) : diff(b, a);
  return d.month;
};
