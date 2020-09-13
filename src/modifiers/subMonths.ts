import { DateObject } from '../dateObject';
import { addMonths } from './addMonths';
import { checkArgs } from '../internal/checkArgs';

/**
 * Subtracts months from a DateObject, returns a new DateObject
 * @example
 * subMonths({ year: 2020, month: 2, day: 20 }, 1);
 * // { year: 2020, month: 1, day: 20 }
 */
export const subMonths = (date: DateObject, months: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(months, 'months');
  return addMonths(date, 0 - months);
};
