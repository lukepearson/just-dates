import { DateObject, Duration, StringDateObject } from '../dateObject';
import { isBefore } from '../comparators/isBefore';
import { diffYears } from '../comparators/diffYears';
import { addMonths } from '../modifiers/addMonths';
import { addYears } from '../modifiers/addYears';
import { diffDays } from '../comparators/diffDays';
import { isAfter } from '../comparators/isAfter';
import { subMonths } from '../modifiers/subMonths';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the difference between two dates as a Duration
 * @example
 * getDuration({ year: 2020, month: 8, day: 20 }, { year: 2026, month: 1, day: 10 })
 * // { years: 5, months: 4, days: 21 }
 *
 * getDuration({ year: 2020, month: 12, day: 31 }, { year: 2021, month: 1, day: 1 })
 * // { years: 0, months: 0, days: 1 }
 */
export const getDuration = (
  a: DateObject | StringDateObject,
  b: DateObject | StringDateObject
): Duration => {
  [a, b] = stringToNumber([a, b]);
  const [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
  let newA = { ..._a };
  let diff = { years: 0, months: 0, days: 0 };
  while (diffYears(newA, _b)) {
    diff.years += 1;
    newA = addYears(newA, 1);
  }
  while (isBefore(newA, _b)) {
    diff.months += 1;
    newA = addMonths(newA, 1);
  }
  if (isAfter(newA, _b)) {
    diff.months -= 1;
    newA = subMonths(newA, 1);
  }
  if (diff.months < 0) {
    diff.months += 12;
    diff.years -= 1;
  }
  diff.days = diffDays(newA, _b);
  return diff;
};
