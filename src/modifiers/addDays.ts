import { DateObject, StringDateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Adds days to a DateObject, returns a new DateObject
 * @example
 * addDays({ year: 2020, month: 1, day: 1 }, 2);
 * // {{ year: 2020, month: 1, day: 3 }}
 */
export const addDays = (date: DateObject | StringDateObject, days: number): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(days, 'days');
  const { year, month, day } = date;
  return reconcile({ year, month, day: day + days });
};
