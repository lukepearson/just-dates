import { DateObject } from '../dateObject';
import { isAfter } from './isAfter';

/**
 * Returns the oldest of 2 DateObjects
 * @example
 * min({ year: 2100, month: 1, day: 1 }, { year: 2000, month: 1, day: 1 })
 * // { year: 2000, month: 1, day: 1 }
 */
export const min = (a: DateObject, b: DateObject): DateObject => (isAfter(a, b) ? b : a);
