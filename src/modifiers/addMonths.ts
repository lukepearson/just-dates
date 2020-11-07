import { getDaysInMonth } from '../queries/getDaysInMonth';
import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { setMonth } from './setMonth';

/**
 * Adds months to a DateObject, returns a new DateObject
 * Keeps the day of the month, within the month. ie if it is the last day of the month
 * the date returned will also be on the last day of the month
 * @example
 * addMonths({ year: 2020, month: 1, day: 1 }, 2);
 * // { year: 2020, month: 3, day: 1 }
 */
export const addMonths = (date: DateObject, months: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(months, 'months');
  const newDate = setMonth(date, date.month + months);
  if (newDate.day === getDaysInMonth(date)) {
    newDate.day = getDaysInMonth(newDate);
  }
  return newDate;
};
