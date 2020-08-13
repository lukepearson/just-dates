import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';

/**
 * Adds days to a DateObject, returns a new DateObject
 * @example
 * // returns {{ year: 2020, month: 3, day: 1 }}
 * addMonths({ year: 2020, month: 1, day: 1 }, 2);
 */
export const addMonths = (dateObject: DateObject, months: number): DateObject => {
  const { year, month, day } = dateObject;
  return reconcile({ year, month: month + months, day });
};
