import { DateObject } from 'dateObject';
import { DateFormat } from '../parsers/parseDate';
import { checkArgs } from '../internal/checkArgs';

export const format = (dateObject: DateObject, format: DateFormat = 'Y-M-D'): string => {
  checkArgs(dateObject, 'dateObject');
  const { year, month, day } = dateObject;
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
