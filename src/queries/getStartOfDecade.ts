import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the start of the decade for the given DateObject
 * @example getStartOfDecade({ year: 2019, month: 8, day: 23 })
 * // { year: 2010, month: 1, day: 1 }
 */
export const getStartOfDecade = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  const year = Math.floor(date.year / 10) * 10;
  return { year, month: 1, day: 1 };
};
