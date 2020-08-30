import { DateObject } from '../dateObject';
import { diffYears } from './diffYears';
import { checkArgs } from '../internal/checkArgs';
import { isAfter } from './isAfter';

/**
 * Returns the number of full months between two dates
 * @example
 * diffMonths({ year: 2020, month: 8, day: 1 }, { year: 2021, month: 2, day: 10 })
 * // 6
 */
export const diffMonths = (a: DateObject, b: DateObject): number => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const [_a, _b] = isAfter(a, b) ? [a, b] : [b, a];
  const years = diffYears(_a, _b);
  return Math.abs(_a.month - _b.month + years * 12);
};
