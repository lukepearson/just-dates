import { DateObject } from '../dateObject';
import { addDays } from './addDays';
import { checkArgs } from '../internal/checkArgs';

export const subDays = (date: DateObject, days: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(days, 'days');
  return addDays(date, 0 - days);
};
