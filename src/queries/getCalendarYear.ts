import { addWeeks } from '../modifiers/addWeeks';
import { Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getStartOfWeekYear } from './getStartOfWeekYear';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the ISO calendar year as a number
 * @example getCalendarYear({ year: 2019, month: 12, day: 30 })
 * // 2020
 *
 * @example getCalendarYear({ year: 2016, month: 1, day: 1 })
 * // 2015
 * https://en.wikipedia.org/wiki/ISO_week_date
 */
export const getCalendarYear: Query<number> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  const startOfYear = getStartOfWeekYear(date);
  return addWeeks(startOfYear, 1).year;
};
