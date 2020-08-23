import { DateObject } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';
import { isAfter } from './isAfter';

/**
 * Returns the number of full weeks between two dates
 * @example
 * diff({ year: 2020, month: 1, day: 1 }, { year: 2020, month: 1, day: 10 })
 * // 1
 */
export const diff = (a: DateObject, b: DateObject): DateObject => {
  const _a = isAfter(a, b) ? reconcile(a) : reconcile(b);
  const _b = isAfter(a, b) ? reconcile(b) : reconcile(a);
  const diff = {
    year: _a.year - _b.year,
    month: _a.month - _b.month,
    day: _a.day - _b.day,
  };
  return diff;
};
