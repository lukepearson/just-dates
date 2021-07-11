import { stringToNumber } from '../internal/stringToNumber';
import { Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';

/**
 * Returns the quarter for the given DateObject
 * @example getQuarter({ year: 2020, month: 8, day: 23 })
 * // 3
 */
export const getQuarter: Query<number> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return Math.ceil(date.month / 3);
};
