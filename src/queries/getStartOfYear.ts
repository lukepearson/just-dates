import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, Query } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { setDayOfYear } from '../modifiers/setDayOfYear';

/**
 * Returns the start of the calendar year for a given DateObject (1st January)
 * @example getStartOfYear({ year: 2020, month: 8, day: 23 })
 * // { year: 2020, month: 1, day: 1 }
 */
export const getStartOfYear: Query<DateObject> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return setDayOfYear(date, 1);
};
