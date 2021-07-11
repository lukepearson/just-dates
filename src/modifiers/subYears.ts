import { DateObject, StringDateObject } from '../dateObject';
import { addYears } from './addYears';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Subracts years from a DateObject, returns a new DateObject
 * @example
 * subYears({ year: 2020, month: 8, day: 27 }, 2);
 * // { year: 2020, month: 6, day: 27 }
 */
export const subYears = (date: DateObject | StringDateObject, years: number): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(years, 'years');
  return addYears(date, 0 - years);
};
