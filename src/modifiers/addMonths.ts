import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { setMonth } from './setMonth';

/**
 * Adds months to a DateObject, returns a new DateObject
 * @example
 * addMonths({ year: 2020, month: 1, day: 1 }, 2);
 * // { year: 2020, month: 3, day: 1 }
 */
export const addMonths = (date: DateObject, months: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(months, 'months');
  return setMonth(date, date.month + months);
};
