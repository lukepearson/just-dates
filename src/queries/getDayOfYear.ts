import { Query } from '../dateObject';
import { diffDays } from '../comparators/diffDays';
import { checkArgs } from '../internal/checkArgs';
import { getStartOfYear } from './getStartOfYear';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Returns the day of the year as a number (1 - 366)
 * @example getDayOfYear({ year: 2020, month: 8, day: 23 })
 * // 7
 */
export const getDayOfYear: Query<number> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  const startOfYear = getStartOfYear(date);
  return diffDays(startOfYear, date) + 1;
};
