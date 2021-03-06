import { stringToNumber } from '../internal/stringToNumber';
import { Comparator } from '../dateObject';
import { diffMonths } from './diffMonths';
import { isAfter } from './isAfter';

/**
 * Returns the number of quarters between two dates
 * @example
 * diffQuarters({ year: 2020, month: 8, day: 1 }, { year: 2021, month: 2, day: 10 })
 * // 2
 */
export const diffQuarters: Comparator<number> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  const [_a, _b] = isAfter(a, b) ? [a, b] : [b, a];
  const months = diffMonths(_a, _b);
  return Math.floor(months / 3);
};
