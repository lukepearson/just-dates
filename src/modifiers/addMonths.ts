import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds months to a DateObject, returns a new DateObject
 * @example
 * addMonths({ year: 2020, month: 1, day: 1 }, 2);
 * // { year: 2020, month: 3, day: 1 }
 */
export const addMonths = (date: DateObject, months: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(months, 'months');
  const { year, month, day } = date;
  return reconcile({ year, month: month + months, day });
};
