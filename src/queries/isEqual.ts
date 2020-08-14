import { DateObject } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';

/**
 *
 * @param a
 * @param b
 */
export const isEqual = (a: DateObject, b: DateObject): boolean => {
  const _a = reconcile(a);
  const _b = reconcile(b);
  return _a.year === _b.year && _a.month === _b.month && _a.day === _b.day;
};
