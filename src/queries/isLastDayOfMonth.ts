import { checkArgs } from '../internal/checkArgs';
import { Query } from '../dateObject';
import { getDaysInMonth } from './getDaysInMonth';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Is the given DateObject on the last day of its month
 * @example isLastDayOfMonth({ year: 2020, month: 2, day: 28 })
 * // false
 */
export const isLastDayOfMonth: Query<boolean> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return getDaysInMonth(date) === date.day;
};
