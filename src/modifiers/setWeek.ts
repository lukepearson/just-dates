import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getStartOfWeekYear } from '../queries/getStartOfWeekYear';
import { getDayOfWeek } from '../queries/getDayOfWeek';
import { addDays } from './addDays';

/**
 * Sets the date of a DateObject to the specified week, landing on the same weekDay
 * @example
 * setWeek({ year: 2020, month: 2, day: 1 }, 16);
 * // { year: 2020, month: 4, day: 30 }
 */
export const setWeek = (date: DateObject, week: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(week, 'week');
  const dayOfWeek = getDayOfWeek(date) - 1;
  const firstDayOfWeekYear = getStartOfWeekYear(date);
  return addDays(firstDayOfWeekYear, (week - 1) * 7 + dayOfWeek);
};
