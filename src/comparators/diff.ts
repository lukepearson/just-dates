import { DateObject } from '../dateObject';
import { isAfter } from './isAfter';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { diffYears } from './diffYears';
import { addYears } from '../modifiers/addYears';
import { subMonths } from '../modifiers/subMonths';

/**
 * Returns the difference between two dates as a DateObject
 * @example
 * diff({ year: 2020, month: 8, day: 20 }, { year: 2026, month: 1, day: 10 })
 * // { year: 5, month: 4, day: 21 }
 */
export const diff = (a: DateObject, b: DateObject): DateObject => {
  const [_a, _b] = isAfter(a, b) ? [b, a] : [a, b];
  let years = diffYears(_a, _b);
  let newDate = addYears(_a, years);
  let months = _b.month - _a.month;
  let days = _b.day - _a.day;
  if (days < 0) {
    days += getDaysInMonth(newDate);
    subMonths(newDate, 1);
    months--;
  }
  if (months < 0 && years > 0) {
    months += 12;
    newDate.year--;
    years--;
  }
  return { year: years, month: months, day: days };
};
