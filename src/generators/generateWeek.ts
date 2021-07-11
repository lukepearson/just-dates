import { DateObject, StringDateObject } from '../dateObject';
import { generateRange } from './generateRange';
import { addDays } from '../modifiers/addDays';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Generates a full week starting from a given DateObject
 * @example
 * generateWeek({ year: 2020, month: 4, day: 29 }, { year: 2020, month: 5, day: 2 })
 * // [{ year: 2020, month: 4, day: 29 }, { year: 2020, month: 4, day: 30 }, ...]
 */
export const generateWeek = (date: DateObject | StringDateObject): DateObject[] => {
  [date] = stringToNumber([date]);
  return generateRange(date, addDays(date, 7));
};
