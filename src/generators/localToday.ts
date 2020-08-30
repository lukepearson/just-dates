import { DateObject } from '../dateObject';

/**
 * Returns the current date in the local timezone
 * @example
 * localToday()
 * // { year: 2020, month: 8, day: 1 }
 */
export const localToday = (): DateObject => {
  const d = new Date();
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
  };
};
