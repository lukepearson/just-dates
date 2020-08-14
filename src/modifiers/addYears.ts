import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds years to a DateObject, returns a new DateObject
 * @example
 * addYears({ year: 2020, month: 2, day: 1 }, 2);
 * // { year: 2022, month: 2, day: 1 }
 */
export const addYears = (date: DateObject, years: number): DateObject => {
  checkArgs(date, 'date');
  const { year, month, day } = date;
  return reconcile({ year: year + years, month, day });
};
