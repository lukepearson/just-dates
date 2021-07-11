import { diffDays } from './diffDays';
import { Comparator } from '../dateObject';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the number of full weeks between two dates
 * @example
 * diffWeeks({ year: 2020, month: 1, day: 3 }, { year: 2020, month: 1, day: 7 })
 * // 0
 */
export const diffWeeks: Comparator<number> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  const diff = diffDays(a, b) / 7;
  return Math.floor(diff);
};
