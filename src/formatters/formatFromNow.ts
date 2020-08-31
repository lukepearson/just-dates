import {
  DateObject,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
  DayOfWeek,
} from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { diff } from '../comparators/diff';
import { isEqual } from '../comparators/isEqual';
import { isBefore } from '../comparators/isBefore';
import { getDayOfWeek } from '../queries/getDayOfWeek';
import { diffDays } from '../comparators/diffDays';
import { getWeek } from '../queries/getWeek';
import { localToday } from '../generators/localToday';

const getDay = (day: DayOfWeek): string => {
  const stringDay = {
    [MONDAY]: 'Monday',
    [TUESDAY]: 'Tuesay',
    [WEDNESDAY]: 'Wednesday',
    [THURSDAY]: 'Thursday',
    [FRIDAY]: 'Friday',
    [SATURDAY]: 'Saturday',
    [SUNDAY]: 'Sunday',
  };
  return stringDay[day];
};

const cap = (str: string) => `${str[0].toUpperCase()}${str.substring(1)}`;

const num = (num: number): string => {
  const stringNumber = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
  };
  if (stringNumber.hasOwnProperty(num)) {
    return stringNumber[num];
  }
  return String(num);
};

/**
 * Format in words the approximate distance that the given DateObject is from "now".
 * Defaults to localToday()
 * @example
 * formatFromNow({ year: 1900, month: 1, day: 1 }, { year: 2000, month: 1, day: 2 })
 * // 'tomorrow'
 * @example
 * formatFromNow({ year: 1900, month: 1, day: 1 }, { year: 2000, month: 1, day: 6 })
 * // 'next Friday'
 */
export const formatFromNow = (date: DateObject, now: DateObject = localToday()): string => {
  checkArgs(date, 'date');
  checkArgs(now, 'now');
  const isFuture = isBefore(now, date);
  const days = diffDays(date, now);
  const weeks = Math.abs(getWeek(date) - getWeek(now));
  const dayOfWeek = getDay(getDayOfWeek(date));
  const { year, month } = diff(date, now);
  if (isEqual(date, now)) return 'Today';
  if (year > 1) return isFuture ? `In ${num(year)} years` : `${cap(num(year))} years ago`;
  if (days > 365) return isFuture ? 'Next year' : 'Last year';
  if (days === 1) return isFuture ? 'Tomorrow' : 'Yesterday';
  if (weeks === 0) return isFuture ? `On ${dayOfWeek}` : `${cap(num(days))} days ago`;
  if (weeks === 1) return isFuture ? `Next ${dayOfWeek}` : `Last ${dayOfWeek}`;
  if (month === 0) return isFuture ? `In ${num(weeks)} weeks` : `${cap(num(weeks))} weeks ago`;
  if (month === 1) return isFuture ? 'Next month' : 'Last month';
  return isFuture ? `In ${num(month)} months` : `${cap(num(month))} months ago`;
};
