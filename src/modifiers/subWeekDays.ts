import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, StringDateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { addWeekDays } from './addWeekDays';

/**
 * Subracts week days from a DateObject, returns a new DateObject
 * @example
 * subWeekDays({ year: 2020, month: 1, day: 20 }, 6);
 * // { year: 2020, month: 1, day: 10 }
 */
export const subWeekDays = (date: DateObject | StringDateObject, weekDays: number): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(weekDays, 'weekDays');
  return addWeekDays(date, 0 - weekDays);
};
