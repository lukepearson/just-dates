import { DateObject, StringDateObject } from '../dateObject';
import { addDays } from './addDays';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Subtracts days from a DateObject, returns a new DateObject
 * @example
 * subDays({ year: 2020, month: 2, day: 20 }, 10);
 * // { year: 2020, month: 2, day: 10 }
 */
export const subDays = (date: DateObject | StringDateObject, days: number): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(days, 'days');
  return addDays(date, 0 - days);
};
