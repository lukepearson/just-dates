import { DateObject, Duration } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds a Duration to a DateObject, returns a new DateObject
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
  const weekDays = (duration.weeks || 0) * 7;
  const days = (duration.days || 0) + weekDays;
  const delta = {
    year: duration.years || 0,
    month: duration.months || 0,
    day: days,
  };
  return reconcile({
    year: date.year + delta.year,
    month: date.month + delta.month,
    day: date.day + delta.day,
  });
};
