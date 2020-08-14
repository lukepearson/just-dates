import { DateObject, Duration } from 'dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds a Duration to a DateObject
 * @example
 * add({ year: 2020, month: 1, day: 1 }, { year: 2 });
 * // { year: 2022, month: 1, day: 1 }
 * @example
 * add({ year: 2020, month: 1, day: 1 }, { year: 2, day: 20 });
 * // { year: 2022, month: 1, day: 21 }
 * @example
 * add({ year: 2020, month: 1, day: 1 }, { week: 2 });
 * // { year: 2020, month: 1, day: 15 }
 */
export const add = (date: DateObject, duration: Duration): DateObject => {
  checkArgs(date, 'date');
  checkArgs(duration, 'duration');
  const weekDays = (duration.week || 0) * 7;
  const days = (duration.day || 0) + weekDays;
  const delta = {
    year: duration.year || 0,
    month: duration.month || 0,
    day: days,
  };
  return reconcile({
    year: date.year + delta.year,
    month: date.month + delta.month,
    day: date.day + delta.day,
  });
};
