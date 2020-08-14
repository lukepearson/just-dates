import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds days to a DateObject, returns a new DateObject
 * @example
 * // returns {{ year: 2020, month: 1, day: 3 }}
 * addDays({ year: 2020, month: 1, day: 1 }, 2);
 */
export const addDays = (date: DateObject, days: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(days, 'days');
  const { year, month, day } = date;
  return reconcile({ year, month, day: day + days });
};
