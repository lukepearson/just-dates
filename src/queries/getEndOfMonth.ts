import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { getDaysInMonth } from './getDaysInMonth';

/**
 * Returns the the last day of the month as a DateObject
 * @example getEndOfMonth({ year: 2020, month: 8, day: 23 })
 * // { year: 2020, month: 8, day: 31 }
 */
export const getEndOfMonth: Query<DateObject> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return { year: date.year, month: date.month, day: getDaysInMonth(date) };
};
