import { THURSDAY, WEDNESDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';
import { isLeapYear } from './isLeapYear';

/**
 * Returns the number of calendar weeks in a year
 * @example getCalendarWeeksInYear(2020)
 * // 53
 */
export const getCalendarWeeksInYear = (year: number): number => {
  checkArgs(year, 'year');
  const firstOfYear = { year, month: 1, day: 1 };
  const dayOfWeek = getDayOfWeek(firstOfYear);
  if (isLeapYear(firstOfYear) && dayOfWeek === WEDNESDAY) return 53;
  if (!isLeapYear(firstOfYear) && dayOfWeek === THURSDAY) return 53;
  return 52;
};
