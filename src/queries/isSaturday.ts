import { DateObject } from '../dateObject';
import { format } from '../formatters/format';
import { checkArgs } from '../internal/checkArgs';

export const isSaturday = (date: DateObject): boolean => {
  checkArgs(date, 'date');
  return new Date(format(date)).getDay() === 6;
};
