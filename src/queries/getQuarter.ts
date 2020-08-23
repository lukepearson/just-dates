import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the quarter for the given DateObject
 * @example getQuarter({ year: 2020, month: 8, day: 23 })
 * // 3
 */
export const getQuarter = (date: DateObject): number => {
  checkArgs(date, 'date');
  return Math.ceil(date.month / 3);
};
