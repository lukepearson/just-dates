import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Sets the day of the month for a DateObject, returns a new DateObject
 * @example
 * setDay({ year: 2020, month: 2, day: 1 }, 2);
 * // { year: 2020, month: 2, day: 2 }
 */
export const setDay = (date: DateObject, day: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(day, 'day');
  return reconcile({ ...date, day });
};
