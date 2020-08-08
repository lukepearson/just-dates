import { DateObject } from 'dateObject';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { isValid } from '../queries/isValid';

/**
 * Returns a valid date by sorting into the right denominations.
 * For example { year: 2000, month: 12: day: 32 } would become { year: 2001, month: 1: day: 1 }
 * and { year: 2000, month: -2: day: 32 } would become { year: 2001, month: 1: day: 1 }
 * @param dateObject
 */
export const reconcile = (dateObject: DateObject): DateObject => {
  let { year, month, day } = dateObject;
  let daysInMonth = getDaysInMonth(month, year);
  if (day > daysInMonth) {
    month++;
    day -= daysInMonth;
    daysInMonth = getDaysInMonth(month, year);
  }
  if (day <= 0) {
    month--;
    daysInMonth = getDaysInMonth(month, year);
    day += daysInMonth;
  }
  if (month > 12) {
    year++;
    month -= 12;
  }
  if (month <= 0) {
    year--;
    month += 12;
  }
  year = Math.max(1, Math.min(9999, year));
  daysInMonth = getDaysInMonth(month, year);
  if (day > daysInMonth) {
    month++;
    day -= daysInMonth;
  }
  if (!isValid({ year, month, day })) {
    if (isNaN(day)) return { year, month, day };
    return reconcile({ year, month, day });
  }
  return { year, month, day };
};
