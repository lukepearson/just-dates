import { DateObject, StringDateObject } from '../dateObject';
import { isBefore } from '../comparators/isBefore';
import { addDays } from '../modifiers/addDays';
import { stringToNumber } from '../internal/stringToNumber';

/**
 * Generates an inclusive date range between two DateObjects
 * @example
 * generateRange({ year: 2020, month: 4, day: 29 }, { year: 2020, month: 5, day: 2 })
 * // [{ year: 2020, month: 4, day: 29 }, { year: 2020, month: 4, day: 30 }, ...]
 */
export const generateRange = (
  a: DateObject | StringDateObject,
  b: DateObject | StringDateObject
): DateObject[] => {
  [a, b] = stringToNumber([a, b]);
  let [_a, _b] = isBefore(a, b) ? [a, b] : [b, a];
  const days = [];
  let newDate = { ..._a };
  while (isBefore(newDate, _b)) {
    days.push({ ...newDate });
    newDate = addDays(newDate, 1);
  }
  days.push({ ...newDate });
  return days;
};
