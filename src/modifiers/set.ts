import { DateObject, DatePart } from 'dateObject';
import { reconcile } from './reconcile';
import { checkArgs } from '../internal/checkArgs';

/**
 * Sets the properties of a DateObject
 * @example
 * set({ year: 2020, month: 2, day: 1 }, { day: 21 });
 * // { year: 2020, month: 2, day: 21 }
 */
export const set = (date: DateObject, part: DatePart): DateObject => {
  checkArgs(date, 'date');
  checkArgs(part, 'part');
  return reconcile({
    ...date,
    ...part,
  });
};
