import { DateObject } from '../dateObject';

/**
 * Returns the current date at UTC
 * @example
 * utcToday()
 * // { year: 2020, month: 8, day: 1 }
 */
export const utcToday = (): DateObject => {
  const d = new Date();
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
  };
};
