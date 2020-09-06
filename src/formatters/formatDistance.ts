import { DateObject } from '../dateObject';
import { getDuration } from '../durations/getDuration';
import { formatDuration } from '../durations/formatDuration';

/**
 * Returns the difference between two DateObjects as a string
 * @example
 * formatDistance({ year: 2020, month: 2, day: 3 }, { year: 2023, month: 11, day: 21 })
 * // '3 years, 9 months and 18 days'
 * @example
 * formatDistance({ year: 2020, month: 5, day: 3 }, { year: 2020, month: 7, day: 4 })
 * // '2 months and 1 day'
 */
export const formatDistance = (a: DateObject, b: DateObject): string => {
  return formatDuration(getDuration(a, b));
};
