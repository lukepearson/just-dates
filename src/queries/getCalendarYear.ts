import { addWeeks } from '../modifiers/addWeeks';
import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getStartOfWeekYear } from './getStartOfWeekYear';

/**
 * Returns the ISO calendar year as a number
 * @example getCalendarYear({ year: 2019, month: 12, day: 30 })
 * // 2020
 *
 * @example getCalendarYear({ year: 2016, month: 1, day: 1 })
 * // 2015
 * https://en.wikipedia.org/wiki/ISO_week_date
 */
export const getCalendarYear = (date: DateObject): number => {
  checkArgs(date, 'date');
  const startOfYear = getStartOfWeekYear(date);
  return addWeeks(startOfYear, 1).year;
};
