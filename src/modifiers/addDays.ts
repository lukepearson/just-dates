import { DateObject } from 'dateObject';
import { reconcile } from './reconcile';

/**
 * Adds days to a DateObject, returns a new DateObject
 * @example
 * // returns {{ year: 2020, month: 1, day: 3 }}
 * addDays({ year: 2020, month: 1, day: 1 }, 2);
 */
export const addDays = (dateObject: DateObject, days: number): DateObject => {
  const { year, month, day } = dateObject;
  return reconcile({ year, month, day: day + days });
};
