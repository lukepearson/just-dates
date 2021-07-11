import { addYears } from '../modifiers/addYears';
import { Comparator } from '../dateObject';
import { getCalendarWeek } from '../queries/getCalendarWeek';
import { isBefore } from './isBefore';
import { getCalendarWeeksInYear } from '../queries/getCalendarWeeksInYear';
import { getCalendarYear } from '../queries/getCalendarYear';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the number of calendar weeks between two dates
 * @example
 * diffCalendarWeeks({ year: 2020, month: 1, day: 3 }, { year: 2020, month: 1, day: 7 })
 * // 1
 */
export const diffCalendarWeeks: Comparator<number> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  const [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
  const remainingWeeks = getCalendarWeeksInYear(_a.year) - getCalendarWeek(_a);
  if (getCalendarYear(_a) == getCalendarYear(_b)) {
    return getCalendarWeek(_b) - getCalendarWeek(_a);
  }
  const bWeeks = getCalendarWeek(_b);
  let interimWeeks = 0;
  let newA = addYears(_a, 1);
  while (getCalendarYear(newA) < getCalendarYear(_b)) {
    interimWeeks += getCalendarWeeksInYear(newA.year);
    newA = addYears(newA, 1);
  }
  return remainingWeeks + interimWeeks + bWeeks;
};
