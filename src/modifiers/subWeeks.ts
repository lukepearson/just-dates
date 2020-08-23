import { DateObject } from '../dateObject';
import { addWeeks } from './addWeeks';
import { checkArgs } from '../internal/checkArgs';

export const subWeeks = (date: DateObject, weeks: number): DateObject => {
  checkArgs(date, 'date');
  checkArgs(weeks, 'weeks');
  return addWeeks(date, 0 - weeks);
};
