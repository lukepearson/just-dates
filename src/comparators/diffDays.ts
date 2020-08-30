import { DateObject } from '../dateObject';
import { isBefore } from './isBefore';
import { isNumberLeapYear } from '../queries/isLeapYear';
import { getDaysInMonth } from '../queries/getDaysInMonth';

/**
 * Returns the number of days between two dates
 * @example
 * diffDays({ year: 2020, month: 1, day: 1 }, { year: 2020, month: 1, day: 10 })
 * // 9
 */
export const diffDays = (a: DateObject, b: DateObject): number => {
  const [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
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

// This implementation is 8x slower:

// export const diffDays = (a: DateObject, b: DateObject): number => {
//   checkArgs(a, 'a');
//   checkArgs(b, 'b');
//   const [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
//   let days = 0;
//   let newDate = reconcile(_a);
//   while (diffYears(newDate, _b) > 1) {
//     if (isLeapYear(newDate)) {
//       days += 366;
//     } else {
//       days += 365;
//     }
//     newDate.year++;
//   }
//   while (diffMonths(newDate, _b)) {
//     days += getDaysInMonth(newDate);
//     newDate.month++;
//     if (newDate.month > 12) {
//       newDate = reconcile(newDate);
//     }
//   }
//   days += _b.day - newDate.day;
//   return days;
// };
