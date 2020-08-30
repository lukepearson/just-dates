import { DateObject } from '../dateObject';
import { generateRange } from './generateRange';
import { addDays } from '../modifiers/addDays';

/**
 * Generates a full week starting from a given DateObject
 * @example
 * generateWeek({ year: 2020, month: 4, day: 29 }, { year: 2020, month: 5, day: 2 })
 * // [{ year: 2020, month: 4, day: 29 }, { year: 2020, month: 4, day: 30 }, ...]
 */
export const generateWeek = (date: DateObject): DateObject[] =>
  generateRange(date, addDays(date, 7));
