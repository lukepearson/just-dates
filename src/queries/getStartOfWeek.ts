import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { subDays } from '../modifiers/subDays';
import { getDayOfWeek } from './getDayOfWeek';

/**
 * Returns the start of the week for the given DateObject
 * @example getStartOfWeek({ year: 2020, month: 8, day: 23 })
 * // { year: 2020, month: 8, day: 17 }
 */
export const getStartOfWeek = (date: DateObject): DateObject => {
  checkArgs(date, 'date');
  const dayOfWeek = getDayOfWeek(date);
  return subDays(date, dayOfWeek - 1);
};
