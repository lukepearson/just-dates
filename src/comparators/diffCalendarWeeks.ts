import { DateObject } from '../dateObject';
import { getWeek } from '../queries/getWeek';
import { diffYears } from './diffYears';
import { isBefore } from './isBefore';

/**
 * Returns the number of calendar between two dates
 * @example
 * diffCalendarWeeks({ year: 2020, month: 1, day: 3 }, { year: 2020, month: 1, day: 7 })
 * // 1
 */
export const diffCalendarWeeks = (a: DateObject, b: DateObject): number => {
  const [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
  if (_a.year === _b.year) {
    return Math.abs(getWeek(_b) - getWeek(_a));
  }
  const remainingWeeks = 52 - getWeek(_a);
  return (diffYears(_a, _b) - 1) * 52 + remainingWeeks + getWeek(_b);
};
