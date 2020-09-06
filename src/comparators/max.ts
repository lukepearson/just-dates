import { DateObject } from '../dateObject';
import { isAfter } from './isAfter';

/**
 * Returns the latest of 2 DateObjects
 * @example
 * max({ year: 2100, month: 1, day: 1 }, { year: 2000, month: 1, day: 1})
 * // { year: 2100, month: 1, day: 1 }
 */
export const max = (a: DateObject, b: DateObject): DateObject => (isAfter(a, b) ? a : b);
