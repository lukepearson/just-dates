import { DateObject } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Checks whether two dates are equal
 * @example
 * isEqual({ year: 2000, month: 1, day: 1 }, { year: 2000, month: 1, day: 1})
 * // true
 */
export const isEqual = (a: DateObject, b: DateObject): boolean => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const _a = reconcile(a);
  const _b = reconcile(b);
  return _a.year === _b.year && _a.month === _b.month && _a.day === _b.day;
};
