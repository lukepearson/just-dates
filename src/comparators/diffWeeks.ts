import { diffDays } from './diffDays';
import { DateObject } from '../dateObject';

/**
 * Returns the number of full weeks between two dates
 * @example
 * diffWeeks({ year: 2020, month: 1, day: 3 }, { year: 2020, month: 1, day: 7 })
 * // 0
 */
export const diffWeeks = (a: DateObject, b: DateObject): number => {
  const diff = diffDays(a, b) / 7;
  return Math.floor(diff);
};
