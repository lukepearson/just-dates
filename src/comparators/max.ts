import { stringToNumber } from '../internal/stringToNumber';
import { Comparator, DateObject } from '../dateObject';
import { isAfter } from './isAfter';

/**
 * Returns the latest of 2 DateObjects
 * @example
 * max({ year: 2100, month: 1, day: 1 }, { year: 2000, month: 1, day: 1})
 * // { year: 2100, month: 1, day: 1 }
 */
export const max: Comparator<DateObject> = (a, b) => {
  [a, b] = stringToNumber([a, b]);
  return isAfter(a, b) ? a : b;
};
