import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from './isSaturday';
import { isSunday } from './isSunday';

export const isWeekend = (date: DateObject): boolean => {
  checkArgs(date, 'dateObject');
  return isSaturday(date) || isSunday(date);
};
