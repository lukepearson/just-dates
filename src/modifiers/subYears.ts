import { DateObject } from '../dateObject';
import { addYears } from './addYears';
import { checkArgs } from '../internal/checkArgs';

/**
 * Subracts years from a DateObject, returns a new DateObject
 * @example
 * subYears({ year: 2020, month: 8, day: 27 }, 2);
 * // { year: 2020, month: 6, day: 27 }
 */
export const subYears = (date: DateObject, years: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(years, 'years');
  return addYears(date, 0 - years);
};
