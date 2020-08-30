import { DateObject } from '../dateObject';
import { generateRange } from './generateRange';

/**
 * Generates a full week from a given DateObject
 * @example
 * generateYear(2020)
 * // [{ year: 2020, month: 1, day: 1 }, { year: 2020, month: 1, day: 2 }, ...]
 */
export const generateYear = (year: number): DateObject[] => {
  const startOfYear = { year, month: 1, day: 1 };
  const endOfYear = { year, month: 12, day: 31 };
  return generateRange(startOfYear, endOfYear);
};
