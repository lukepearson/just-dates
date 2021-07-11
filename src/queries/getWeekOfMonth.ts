import { stringToNumber } from '../internal/stringToNumber';
import { Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from './getDayOfWeek';
import { getStartOfMonth } from './getStartOfMonth';

/**
 * Returns the week of the month as a number
 * @example getWeekOfMonth({ year: 2020, month: 4, day: 14 })
 * // 2
 */
export const getWeekOfMonth: Query<number> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  const firstDayOfMonth = getStartOfMonth(date);
  const startDay = getDayOfWeek(firstDayOfMonth);
  const lastDayOfFirstWeek = firstDayOfMonth.day + 7 - startDay;
  const daysLeft = date.day - lastDayOfFirstWeek;
  return date.day < lastDayOfFirstWeek ? 1 : Math.ceil(daysLeft / 7) + 1;
};
