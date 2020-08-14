import { DateObject } from '../dateObject';
import { checkArgs } from '../internal/checkArgs';
import { isSaturday } from './isSaturday';
import { isSunday } from './isSunday';

export const isWeekend = (dateObject: DateObject): boolean => {
  checkArgs(dateObject, 'dateObject');
  return isSaturday(dateObject) || isSunday(dateObject);
};
