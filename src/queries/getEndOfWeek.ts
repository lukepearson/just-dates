import { stringToNumber } from '../internal/stringToNumber';
import { DateObject, Query, SUNDAY } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { setDayOfWeek } from '../modifiers/setDayOfWeek';

/**
 * Returns the the last day of the week as a DateObject
 * @example getEndOfWeek({ year: 2020, month: 8, day: 24 })
 * // { year: 2020, month: 8, day: 30 }
 */
export const getEndOfWeek: Query<DateObject> = (date) => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  return setDayOfWeek(date, SUNDAY);
};
