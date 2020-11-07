import { DateObject } from '../dateObject';
import { generateRange } from './generateRange';
import { getStartOfWeekYear } from '../queries/getStartOfWeekYear';
import { getEndOfWeekYear } from '../queries/getEndOfWeekYear';

/**
 * @example
 * Generates a full ISO week-numbering year
 * generateWeekYear(2020)
 * // [{ year: 2019, month: 12, day: 30 }, ... { year: 2021, month: 3, day: 1 }, ...]
 */
export const generateWeekYear = (year: number): DateObject[] => {
  const startOfYear = getStartOfWeekYear({ year, month: 6, day: 1 });
  const endOfYear = getEndOfWeekYear({ year, month: 6, day: 1 });
  return generateRange(startOfYear, endOfYear);
};
