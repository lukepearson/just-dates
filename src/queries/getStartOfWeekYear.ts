import { DateObject, FRIDAY, MONDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { setDayOfYear } from '../modifiers/setDayOfYear';
import { getDayOfWeek } from './getDayOfWeek';
import { setDayOfWeek } from '../modifiers/setDayOfWeek';
import { getCalendarWeek } from './getCalendarWeek';
import { getCalendarWeeksInYear } from './getCalendarWeeksInYear';
import { subWeeks } from '../modifiers/subWeeks';
import { addWeeks } from '../modifiers/addWeeks';

/**
 * Returns the start of the weekYear for the given DateObject
 * The weekYear is the first Monday in week commencing the first of January in the month
 * @example getStartOfWeekYear({ year: 2020, month: 8, day: 23 })
 * // { year: 2019, month: 12, day: 30 }
 * https://en.wikipedia.org/wiki/ISO_week_date
 * If 1 January is on a Monday, Tuesday, Wednesday or Thursday, it is in W01.
 * If it is on a Friday, it is part of W53 of the previous year.
 * If it is on a Saturday, it is part of the last week of the previous year which is numbered W52 in a common year and W53 in a leap year.
 * If it is on a Sunday, it is part of W52 of the previous year.
 */
export const getStartOfWeekYear = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  const weekNum = getCalendarWeek(date);
  const maxWeekNum = getCalendarWeeksInYear(date.year);
  if (weekNum >= maxWeekNum) {
    return getStartOfWeekYear(subWeeks(date, 1));
  }
  if (weekNum == 1) {
    return setDayOfWeek(date, MONDAY);
  }
  const firstOfJan = setDayOfYear(date, 1);
  if (getDayOfWeek(firstOfJan) < FRIDAY) {
    return setDayOfWeek(firstOfJan, MONDAY);
  }
  return setDayOfWeek(addWeeks(firstOfJan, 1), MONDAY);
};
