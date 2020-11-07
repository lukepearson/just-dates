import { isBefore } from '../comparators/isBefore';
import { addYears } from '../modifiers/addYears';
import { DateObject, SUNDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { set } from '../modifiers/set';
import { setDayOfWeek } from '../modifiers/setDayOfWeek';

/**
 * Returns the end of the weekYear for the given DateObject
 * https://en.wikipedia.org/wiki/ISO_week_date#Last_week
 * The last week of the ISO week-numbering year, i.e. W52 or W53, is the week before W01 of the next year. 
 * This week’s properties are:
    It has the year's last Thursday in it.
    It is the last week with a majority (4 or more) of its days in December.
    Its middle day, Thursday, falls in the ending year.
    Its last day is the Sunday nearest to 31 December.
    It has 28 December in it.
 * @example getEndOfWeekYear({ year: 2020, month: 8, day: 23 })
 * // { year: 2019, month: 12, day: 30 }
 */
export const getEndOfWeekYear = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  let endOfYear = set(date, { month: 12, day: 28 });
  if (isBefore(endOfYear, date)) {
    endOfYear = set(addYears(date, 1), { month: 12, day: 28 });
  }
  return setDayOfWeek(endOfYear, SUNDAY);
};
