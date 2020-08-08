import { DateObject } from 'dateObject';
import { reconcile } from '../modifiers/reconcile';

export const isBefore = (a: DateObject, b: DateObject): boolean => {
  const _a = reconcile(a);
  const _b = reconcile(b);
  if (_a.year < _b.year) return true;
  if (_a.year === _b.year && _a.month < _b.month) return true;
  if (_a.year === _b.year && _a.month === _b.month && _a.day < _b.day) return true;
  return false;
};
