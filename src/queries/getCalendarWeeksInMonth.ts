import { checkArgs } from '../internal/checkArgs';
import { diffCalendarWeeks } from '../comparators/diffCalendarWeeks';
import { getEndOfMonth } from './getEndOfMonth';
import { getStartOfMonth } from './getStartOfMonth';
import { stringToNumber } from '../internal/stringToNumber';
import { Query } from 'src/dateObject';

/**
 * Returns the number of calendar weeks in a month
 * @example getCalendarWeeksInMonth({ year: 2020, month: 4, day: 14 })
 * // 2
 */
export const getCalendarWeeksInMonth: Query<number> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return diffCalendarWeeks(getEndOfMonth(date), getStartOfMonth(date)) + 1;
};
