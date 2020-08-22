import { DateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Adds quarters to a DateObject, returns a new DateObject
 * @example
 * addQuarters({ year: 2020, month: 1, day: 1 }, 2);
 * // { year: 2020, month: 3, day: 1 }
 */
export const addQuarters = (date: DateObject, quarters: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(quarters, 'quarters');
  const { year, month, day } = date;
  return reconcile({ year, month: month + quarters * 3, day });
};
