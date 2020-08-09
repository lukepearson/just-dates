import { DateObject, DateInterval } from 'dateObject';
import { reconcile } from './reconcile';

export const add = (a: DateObject, b: DateInterval): DateObject => {
  if (!a || !b) throw new Error('Invalid argument');
  const weekDays = (b.week || 0) * 7;
  const days = (b.day || 0) + weekDays;
  const delta = {
    year: b.year || 0,
    month: b.month || 0,
    day: days,
  };
  return reconcile({
    year: a.year + delta.year,
    month: a.month + delta.month,
    day: a.day + delta.day,
  });
};
