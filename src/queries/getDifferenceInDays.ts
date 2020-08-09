import { DateObject } from 'dateObject';
import { isAfter } from './isAfter';
import { isNumberLeapYear } from './isLeapYear';
import { getDaysInMonth } from './getDaysInMonth';
import { checkArgs } from '../internal/checkArgs';

export const getDifferenceInDays = (a: DateObject, b: DateObject): number => {
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  const _a = isAfter(a, b) ? a : b;
  const _b = isAfter(a, b) ? b : a;
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
