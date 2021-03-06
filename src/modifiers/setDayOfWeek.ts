import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, DayOfWeek, StringDateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDayOfWeek } from '../queries/getDayOfWeek';
import { addDays } from './addDays';

/**
 * Sets the day of the week of a DateObject (Mon - Sun), returns a new DateObject
 * @example
 * setDay({ year: 2020, month: 2, day: 1 }, 1);
 * // { year: 2020, month: 2, day: 2 }
 */
export const setDayOfWeek = (date: DateObject | StringDateObject, day: DayOfWeek): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(day, 'day');
  const dayOfWeek = getDayOfWeek(date);
  const diff = day - dayOfWeek;
  return addDays(date, diff);
};
