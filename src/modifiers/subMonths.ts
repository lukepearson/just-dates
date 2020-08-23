import { DateObject } from '../dateObject';
import { addMonths } from './addMonths';
import { checkArgs } from '../internal/checkArgs';

/**
 * Subtracts months from a DateObject
 * @example
 * subDays({ year: 2020, month: 2, day: 20 }, 2);
 * // { year: 2019, month: 12, day: 20 }
 */
export const subMonths = (date: DateObject, months: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(months, 'months');
  return addMonths(date, 0 - months);
};
