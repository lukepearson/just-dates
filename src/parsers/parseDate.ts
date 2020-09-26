import { DateObject } from '../dateObject';

/**
 * @example
 * Parses a native Date object into a DateObject
 * parseDate(new Date(2020, 3, 6))
 * // { year: 2020, month: 4, day: 6 }
 */
export const parseDate = (date: Date): DateObject => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};
