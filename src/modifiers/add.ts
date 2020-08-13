import { DateObject, DateInterval } from 'dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds a DateInterval to a DateObject
 * @example
 * // returns {{ year: 2022, month: 1, day: 1 }}
 * add({ year: 2020, month: 1, day: 1 }, { year: 2 });
 * @example
 * // returns {{ year: 2022, month: 1, day: 21 }}
 * add({ year: 2020, month: 1, day: 1 }, { year: 2, day: 20 });
 * @example
 * // returns {{ year: 2020, month: 1, day: 15 }}
 * add({ year: 2020, month: 1, day: 1 }, { week: 2 });
 */
export const add = (a: DateObject, b: DateInterval): DateObject => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
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
