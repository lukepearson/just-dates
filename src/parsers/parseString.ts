import { DateObject } from '../dateObject';
import { reconcile } from '../modifiers/reconcile';

// https://en.wikipedia.org/wiki/Date_format_by_country
export type BigEndian = 'Y-M-D' | 'Y/M/D' | 'Y.M.D' | 'Y M D';
export type LittleEndian = 'D-M-Y' | 'D/M/Y' | 'D.M.Y' | 'D M Y';
export type MiddleEndian = 'M-D-Y' | 'M/D/Y' | 'M.D.Y' | 'M D Y';
export type DateFormat = BigEndian | LittleEndian | MiddleEndian;

/**
 * @example
 * Parses a date string into a DateObject
 * parseString('2020-01-01', 'Y-M-D')
 * // { year: 2020, month: 1, day: 1 }
 */
export const parseString = (
  dateString: string,
  format: DateFormat = 'Y/M/D'
): DateObject | null => {
  const formatPattern = /([ymd])/gi;
  const digitPattern = /(\d)/gi;
  const nonDigitPattern = /(\D)/gi;

  const digits = String(dateString)
    .split(nonDigitPattern)
    .filter((digit) => digitPattern.test(digit));
  const tokens = format.match(formatPattern);
  if (!tokens) throw new Error(`Invalid date format "${format}"`);
  if (digits.length < 3) throw new Error(`Invalid date "${dateString}"`);

  const upperTokens = tokens.map((token) => token.toUpperCase());
  const yearIndex = upperTokens.indexOf('Y');
  const monthIndex = upperTokens.indexOf('M');
  const dayIndex = upperTokens.indexOf('D');

  return reconcile({
    year: Number(digits[yearIndex]),
    month: Number(digits[monthIndex]),
    day: Number(digits[dayIndex]),
  });
};
