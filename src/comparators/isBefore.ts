import { Comparator } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Checks whether the first date is before the second
 * @example
 * isBefore({ year: 1900, month: 1, day: 1 }, { year: 2000, month: 1, day: 1})
 * // true
 */
export const isBefore: Comparator<boolean> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const _a = reconcile(a);
  const _b = reconcile(b);
  if (_a.year < _b.year) return true;
  if (_a.year === _b.year && _a.month < _b.month) return true;
  if (_a.year === _b.year && _a.month === _b.month && _a.day < _b.day) return true;
  return false;
};
