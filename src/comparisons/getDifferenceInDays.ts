import { DateObject } from '../dateObject';
import { isAfter } from './isAfter';
import { isNumberLeapYear } from '../queries/isLeapYear';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { checkArgs } from '../internal/checkArgs';
import { reconcile } from '../modifiers/reconcile';

/**
 * Returns the number of days between two dates
 * @example
 * getDifferenceInDays({ year: 2020, month: 1, day: 1 }, { year: 2020, month: 1, day: 10 })
 * // 9
 */
export const getDifferenceInDays = (a: DateObject, b: DateObject): number => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const _a = isAfter(a, b) ? reconcile(a) : reconcile(b);
  const _b = isAfter(a, b) ? reconcile(b) : reconcile(a);
  return Math.abs(getTotalDays(_a) - getTotalDays(_b));
};

export const getTotalDays = (a: DateObject): number => {
  let days = 0;
  let currentYear = a.year;
  let currentMonth = a.month;

  days += a.day;
  currentMonth -= 1;

  while (currentMonth > 0) {
    days += getDaysInMonth({ year: currentYear, month: currentMonth });
    currentMonth -= 1;
  }

  currentMonth += 12;
  currentYear -= 1;

  while (currentYear > 0) {
    if (isNumberLeapYear(currentYear)) {
      days += 366;
    } else {
      days += 365;
    }
    currentYear -= 1;
  }
  return days;
};
