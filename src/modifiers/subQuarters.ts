import { DateObject } from '../dateObject';
import { addQuarters } from './addQuarters';
import { checkArgs } from '../internal/checkArgs';

/**
 * Subtracts quarters from a DateObject, returns a new DateObject
 * @example
 * subQuarters({ year: 2022, month: 8, day: 27 }, 10);
 * // { year: 2020, month: 2, day: 27 }
 */
export const subQuarters = (date: DateObject, quarters: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(quarters, 'quarters');
  return addQuarters(date, 0 - quarters);
};
