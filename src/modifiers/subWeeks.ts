import { DateObject } from '../dateObject';
import { addWeeks } from './addWeeks';
import { checkArgs } from '../internal/checkArgs';

/**
 * Subracts weeks from a DateObject, returns a new DateObject
 * @example
 * subWeeks({ year: 2020, month: 8, day: 27 }, 20);
 * // { year: 2020, month: 4, day: 9 }
 */
export const subWeeks = (date: DateObject, weeks: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weeks, 'weeks');
  return addWeeks(date, 0 - weeks);
};
