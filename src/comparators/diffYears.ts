import { stringToNumber } from '../internal/stringToNumber';
import { Comparator } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { diffDays } from './diffDays';

/**
 * Returns the number of full years between two dates
 * @example
 * diffYears({ year: 2020, month: 1, day: 1 }, { year: 2021, month: 12, day: 31 })
 * // 1
 */
export const diffYears: Comparator<number> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  checkArgs(a, 'a');
  checkArgs(b, 'b');
  return Math.floor(diffDays(a, b) / 365);
};
