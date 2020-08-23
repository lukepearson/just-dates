import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { addMonths } from './addMonths';

/**
 * Adds quarters to a DateObject, returns a new DateObject
 * @example
 * addQuarters({ year: 2020, month: 1, day: 1 }, 2);
 * // { year: 2020, month: 3, day: 1 }
 */
export const addQuarters = (date: DateObject, quarters: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(quarters, 'quarters');
  return addMonths(date, quarters * 3);
};
