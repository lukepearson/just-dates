import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the start of the month for the given DateObject
 * @example getStartOfMonth({ year: 2020, month: 8, day: 23 })
 * // { year: 2020, month: 8, day: 1 }
 */
export const getStartOfMonth = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  return { ...date, day: 1 };
};
