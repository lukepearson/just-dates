import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { setDayOfYear } from '../modifiers/setDayOfYear';
import { subDays } from '../modifiers/subDays';
import { getDayOfWeek } from './getDayOfWeek';
import { addDays } from '../modifiers/addDays';

/**
 * Returns the start of the weekYear for the given DateObject
 * The weekYear is the first Monday in week commencing the first of January in the month
 * @example getStartOfWeekYear({ year: 2020, month: 8, day: 23 })
 * // { year: 2019, month: 12, day: 30 }
 */
export const getStartOfWeekYear = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  const startOfYear = setDayOfYear(date, 1);
  const dayOfWeek = getDayOfWeek(startOfYear);
  if (dayOfWeek > 4) {
    return addDays(startOfYear, 8 - dayOfWeek);
  }
  return subDays(startOfYear, dayOfWeek - 1);
};
