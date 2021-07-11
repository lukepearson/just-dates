import { DateObject, DatePart, StringDateObject } from '../dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Sets the properties of a DateObject, returns a new DateObject
 * @example
 * set({ year: 2020, month: 2, day: 1 }, { day: 21 });
 * // { year: 2020, month: 2, day: 21 }
 */
export const set = (date: DateObject | StringDateObject, part: DatePart): DateObject => {
  [date] = stringToNumber([date]);
  checkArgs(date, 'date');
  checkArgs(part, 'part');
  return reconcile({
    ...date,
    ...part,
  });
};
