import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { addWeekDays } from './addWeekDays';

/**
 * subs week days to a DateObject, returns a new DateObject
 * @example
 * subWeekDays({ year: 2020, month: 1, day: 11 }, 5);
 * // { year: 2020, month: 1, day:  }
 */
export const subWeekDays = (date: DateObject, weekDays: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weekDays, 'weekDays');
  return addWeekDays(date, 0 - weekDays);
};
