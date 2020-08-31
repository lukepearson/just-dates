import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the the last day of the year as a DateObject
 * @example getEndOfYear({ year: 2020, month: 8, day: 24 })
 * // { year: 2020, month: 12, day: 31 }
 */
export const getEndOfYear = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  return { ...date, month: 12, day: 31 };
};
