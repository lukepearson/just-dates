import { DateObject } from '../dateObject';
import { DateFormat } from '../parsers/parseString';
import { checkArgs } from '../internal/checkArgs';

/**
 * Outputs a DateObject in the specified format
 * @example
 * format({ year: 2020, month: 2, day: 3 }, 'y-m-d')
 * // '2020-02-03'
 */
export const format = (date: DateObject, format: DateFormat = 'Y-M-D'): string => {
  checkArgs(date, 'date');
  const { year, month, day } = date;
  const pad = (num: number) => String(num).padStart(2, '0');
  const separator = /([^ymd])/gi.exec(format);
  if (!separator) throw new Error(`Invalid date format "${format}"`);
  return format
    .split(separator[0])
    .map((token) => {
      if (/y/i.test(token)) return pad(year);
      if (/m/i.test(token)) return pad(month);
      if (/d/i.test(token)) return pad(day);
      return token;
    })
    .join(separator[0]);
};
