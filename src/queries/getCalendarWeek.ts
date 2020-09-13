import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getStartOfWeekYear } from './getStartOfWeekYear';
import { diffWeeks } from '../comparators/diffWeeks';

/**
 * Returns the week of the year as a number
 * @example getCalendarWeek({ year: 2020, month: 4, day: 14 })
 * // 16
 */
export const getCalendarWeek = (date: DateObject): number => {
  checkArgs(date, 'date');
  const startOfWeekYear = getStartOfWeekYear(date);
  return diffWeeks(startOfWeekYear, date) + 1;
};
