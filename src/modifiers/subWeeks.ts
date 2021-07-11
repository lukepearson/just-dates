import { DateObject, StringDateObject } from '../dateObject';
import { addWeeks } from './addWeeks';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Subracts weeks from a DateObject, returns a new DateObject
 * @example
 * subWeeks({ year: 2020, month: 8, day: 27 }, 20);
 * // { year: 2020, month: 4, day: 9 }
 */
export const subWeeks = (date: DateObject | StringDateObject, weeks: number): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(weeks, 'weeks');
  return addWeeks(date, 0 - weeks);
};
