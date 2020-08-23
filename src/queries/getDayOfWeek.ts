import { DateObject, DayOfWeek } from '../dateObject';
import { diffDays } from '../comparators/diffDays';
import { checkArgs } from '../internal/checkArgs';

const monday = { year: 1, month: 1, day: 1 };

/**
 * Returns the day of the week as a number (1-7)
 * Monday = 1
 * Tuesday = 2
 * ...
 * Sunday = 7
 * @example getDayOfWeek({ year: 2020, month: 8, day: 23 })
 * // 7
 */
export const getDayOfWeek = (date: DateObject): DayOfWeek => {
  checkArgs(date, 'date');
  const diff = (diffDays(monday, date) % 7) + 1;
  return diff as DayOfWeek;
};
