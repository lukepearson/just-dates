import { Comparator } from '../dateObject';
import { isBefore } from './isBefore';
import { diffDays } from './diffDays';
import { addMonths } from '../modifiers/addMonths';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the number of full months between two dates
 * @example
 * diffMonths({ year: 2020, month: 8, day: 1 }, { year: 2021, month: 2, day: 10 })
 * // 6
 */
export const diffMonths: Comparator<number> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  const [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
  let months = 0;
  let newA = { ..._a };
  while (isBefore(newA, _b)) {
    newA = addMonths(newA, 1);
    months += 1;
  }
  let daysOver = diffDays(newA, _b);
  if (daysOver && daysOver < getDaysInMonth(_b)) {
    months -= 1;
  }
  return months;
};
