import { Comparator } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Checks whether the first date is after the second
 * @example
 * isAfter({ year: 2100, month: 1, day: 1 }, { year: 2000, month: 1, day: 1})
 * // true
 */
export const isAfter: Comparator<boolean> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const _a = reconcile(a);
  const _b = reconcile(b);
  if (_b.year < _a.year) return true;
  if (_b.year === _a.year && _b.month < _a.month) return true;
  if (_b.year === _a.year && _b.month === _a.month && _b.day < _a.day) return true;
  return false;
};
