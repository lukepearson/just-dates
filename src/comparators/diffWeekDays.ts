import { Comparator } from '../dateObject';
import { isAfter } from './isAfter';
import { diffWeeks } from './diffWeeks';
import { addDays } from '../modifiers/addDays';
import { isBefore } from './isBefore';
import { isWeekend } from '../queries/isWeekend';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the number of weekdays between two dates
 * @example
 * diffWeekDays({ year: 2020, month: 8, day: 1 }, { year: 2021, month: 2, day: 10 })
 * // 2
 */
export const diffWeekDays: Comparator<number> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  const [_a, _b] = isAfter(a, b) ? [b, a] : [a, b];
  const weeks = diffWeeks(_a, _b);
  let weekDays = weeks * 5;
  let newDate = addDays(_a, weeks * 7);
  while (isBefore(newDate, _b)) {
    weekDays += isWeekend(newDate) ? 0 : 1;
    newDate = addDays(newDate, 1);
  }
  return weekDays;
};
