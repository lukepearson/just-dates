import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the start of the quarter for the given DateObject
 * @example getStartOfQuarter({ year: 2020, month: 8, day: 23 })
 * // { year: 2020, month: 8, day: 1 }
 */
export const getStartOfQuarter = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  const month = Math.floor(date.month / 4) * 3 + 1;
  return { year: date.year, month, day: 1 };
};
