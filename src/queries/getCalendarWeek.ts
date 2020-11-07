import { subWeeks } from '../modifiers/subWeeks';
import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';
import { getDayOfYear } from './getDayOfYear';
import { getCalendarWeeksInYear } from './getCalendarWeeksInYear';

/**
 * Returns the ISO calendar week as a number for the week-year containing the given date
 * @example getCalendarWeek({ year: 2020, month: 4, day: 14 })
 * // 16
 * https://en.wikipedia.org/wiki/ISO_week_date
 */
export const getCalendarWeek = (date: DateObject): number => {
  checkArgs(date, 'date');
  const ordinal = getDayOfYear(date);
  const weekNumber = Math.floor((ordinal - getDayOfWeek(date) + 10) / 7);
  if (!weekNumber) {
    return getCalendarWeek(subWeeks(date, 1)) + 1;
  }
  const maxWeeks = getCalendarWeeksInYear(date.year);
  if (weekNumber > maxWeeks) return 1;
  return weekNumber;
};
