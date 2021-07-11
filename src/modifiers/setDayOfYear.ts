import { DateObject, StringDateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Sets the date of a DateObject to a specific day of the year, returns a new DateObject
 * @example
 * setDayOfYear({ year: 2019, month: 2, day: 1 }, 365);
 * // { year: 2019, month: 12, day: 31 }
 */
export const setDayOfYear = (
  date: DateObject | StringDateObject,
  dayOfYear: number
): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(dayOfYear, 'dayOfYear');
  return reconcile({ ...date, month: 1, day: dayOfYear });
};
