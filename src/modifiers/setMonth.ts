import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { reconcile } from './reconcile';
import { getDaysInMonth } from '../queries/getDaysInMonth';

/**
 * Sets the month of a DateObject to the specified month, returns a new DateObject
 * If the new month has fewer days than the initial date, it changes to the last day of the new month
 * @example
 * setMonth({ year: 2020, month: 1, day: 31 }, 2);
 * // { year: 2020, month: 2, day: 29 }
 */
export const setMonth = (date: DateObject, month: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(month, 'month');
  const newDate = { ...date, month: month };
  const daysInMonth = getDaysInMonth(newDate);
  if (daysInMonth < newDate.day) {
    newDate.day = daysInMonth;
  }
  return reconcile(newDate);
};
