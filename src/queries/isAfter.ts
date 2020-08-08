import { DateObject } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';

export const isAfter = (a: DateObject, b: DateObject): boolean => {
  const _a = reconcile(a);
  const _b = reconcile(b);
  if (_b.year < _a.year) return true;
  if (_b.year === _a.year && _b.month < _a.month) return true;
  if (_b.year === _a.year && _b.month === _a.month && _b.day < _a.day) return true;
  return false;
};
