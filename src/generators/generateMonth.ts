import { DateObject, YearMonth } from '../dateObject';
import { getDaysInMonth } from '../queries/getDaysInMonth';
import { isBefore } from '../comparators/isBefore';

/**
 * Generates the full month from a given year/month
 * @example
 * generateMonth({ year: 2020, month: 2 })
 * // [{ year: 2020, month: 2, day: 1}, { year: 2020, month: 2, day: 2}, ...]
 */
export const generateMonth = ({ year, month }: YearMonth): DateObject[] => {
  const days = [];
  let newDate = { year, month, day: 1 };
  const lastDay = { ...newDate, day: getDaysInMonth({ year, month }) };
  while (isBefore(newDate, lastDay)) {
    days.push({ ...newDate });
    newDate.day++;
  }
  days.push({ ...newDate });
  return days;
};
