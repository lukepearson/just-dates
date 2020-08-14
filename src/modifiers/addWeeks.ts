import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds weeks to a DateObject, returns a new DateObject
 * @example
 * addWeeks({ year: 2020, month: 2, day: 1 }, 10);
 * // { year: 2020, month: 4, day: 11 }
 */
export const addWeeks = (date: DateObject, weeks: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weeks, 'weeks');
  const weekDays = weeks * 7;
  return reconcile({
    ...date,
    day: date.day + weekDays,
  });
};
