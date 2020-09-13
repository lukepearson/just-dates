import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { diffCalendarWeeks } from '../comparators/diffCalendarWeeks';
import { getEndOfMonth } from './getEndOfMonth';
import { getStartOfMonth } from './getStartOfMonth';

/**
 * Returns the number of calendar weeks in a month
 * @example getCalendarWeeksInMonth({ year: 2020, month: 4, day: 14 })
 * // 2
 */
export const getCalendarWeeksInMonth = (date: DateObject): number => {
  checkArgs(date, 'date');
  return diffCalendarWeeks(getEndOfMonth(date), getStartOfMonth(date)) + 1;
};
